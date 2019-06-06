import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  isAuthenticated = false;
  // private _user: Subject<any> = new Subject<any>();
  // isUser = this._user.asObservable();
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  loginInWithGoogle() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          this.router.navigate(['/profile']);
          resolve(res);
        });
    });
  }

  logout() {
    const path = this.router.url;
    window.localStorage.removeItem('user');
      this.afAuth.auth.signOut();
      this.router.navigate([path]);
  }
}

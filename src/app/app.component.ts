import {Component, Input} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from './shared/service/auth.service';
import {AdminService} from './shared/service/admin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: any;
  public isWaiting = false;
  default = 'Аноним';

  constructor(private a: AngularFireAuth, public afAuth: AuthService, private admin: AdminService) {
    if (window.localStorage.getItem('user') === null) {
      window.localStorage.setItem('user', '{\"email\":\"defaultEmail\", \"uid\":\"defaultUid\"}');
    }
    this.a.authState
      .subscribe((authentic) => {
        if (authentic != null) {
          this.user = authentic;
          this.afAuth.isAuthenticated = true;
          window.localStorage.setItem('user', JSON.stringify(this.user));
        }
      });
  }

  login() {
    this.isWaiting = true;
    this.afAuth.loginInWithGoogle().then(() => {
      this.afAuth.isAuthenticated = true;
      this.isWaiting = false;
    }).catch( () => {
      this.afAuth.isAuthenticated = false;
    });
  }

  logOut() {
    this.afAuth.logout();
    this.afAuth.isAuthenticated = false;
    window.localStorage.setItem('user', '{\"email\":\"defaultEmail\", \"uid\":\"defaultUid\"}');
  }

}

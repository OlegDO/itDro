import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {log} from 'util';
import {Observable} from 'rxjs';
import * as firebase from 'firebase/app';
import {AdminService} from '../../shared/service/admin.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  user$: Observable<firebase.User>;
  constructor(private afAuth: AuthService, private admin: AdminService) {
    this.user$ = this.afAuth.user;
    this.user$.subscribe((u) => {
      this.user = u;
      console.log(u);
    });
  }
}

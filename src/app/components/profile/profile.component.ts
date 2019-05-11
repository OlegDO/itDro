import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  constructor(private a: AngularFireAuth) {
    this.a.authState
      .subscribe((authentic) => {
        if (authentic != null) {
          this.user = authentic;
        }
      });
  }
}

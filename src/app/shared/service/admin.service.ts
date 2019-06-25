import {AuthService} from './auth.service';
import {ReviewService} from './review.service';
import {ADMINS} from '../constants/admins';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminService {
  currentUser: any = '1d';
  isAdmin: boolean;
  constructor() {
    }
    check() {
      this.currentUser = JSON.parse(window.localStorage.getItem('user'));
      for (let i = 0; i < ADMINS.length; i++) {
        if (ADMINS[i].email === this.currentUser.email) {
          return true;
        }}
      return false;
    }
}

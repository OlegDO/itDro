import {AuthService} from './auth.service';
import {ReviewService} from './review.service';
import {ADMINS} from '../constants/admins';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminService {
  private currentUser: any;
  isAdmin: boolean;
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    for (let i = 0; i < ADMINS.length; i++) {
      if (ADMINS[i].email === this.currentUser.email) {
        this.isAdmin = true;
        break;
      } else {
        this.isAdmin = false;
      }
    }
}}

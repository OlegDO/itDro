import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {Review} from '../../shared/models/review';
import {ReviewService} from '../../shared/service/review.service';
import {NgForm} from '@angular/forms';
import {__await} from 'tslib';
import {NgClass} from '@angular/common';
import {Admin} from '../../shared/models/admin';
import {ADMINS} from '../../shared/constants/admins';
import {AdminService} from '../../shared/service/admin.service';
import {AngularFireAuth} from '@angular/fire/auth';



@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() id = '';
  user: any = {};
  reviews: Review[];
  userComment: any;
  uid = JSON.parse(window.localStorage.getItem('user')).uid;
  check: boolean;
  private userName: string;
  private userMail: string;

  constructor(private auth: AuthService, private reviewService: ReviewService, private admin: AdminService) {
    this.check = this.admin.check();
  }
  ngOnInit() {
    this.load();
  }
  private postReview(review: Review) {
    this.reviewService.addReview(review).then((ref) => this.getReview());
  }
  private getReview() {
    this.reviewService.getReview().subscribe((data) => (data));
  }
  private deleteReview(event, review: Review) {
      if (this.uid === review.userId || this.check) {
        return this.reviewService.removeReview(review);
      }
    return this.load();
  }
  private load() {
    this.reviewService.getReview().subscribe((data) => {
      this.reviews = data;
    });
  }
  submitForm(form: NgForm) {

    const review: Review = {
      comment: form.value.userComment,
      userId: JSON.parse(window.localStorage.getItem('user')).uid,
      userName: JSON.parse(window.localStorage.getItem('user')).displayName,
      userPhoto: JSON.parse(window.localStorage.getItem('user')).photoURL,
      email: JSON.parse(window.localStorage.getItem('user')).email,
    };
    if (form.valid === true) {
      this.postReview(review);
    }
    form.resetForm();
    console.log(form);
  }

  inspect($event, review: Review) {
    this.userName = review.userName;
    this.userMail = review.email;
  }
}

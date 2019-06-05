import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {Review} from '../../shared/models/review';
import {ReviewService} from '../../shared/service/review.service';
import {NgForm} from '@angular/forms';
import {__await} from 'tslib';
import {NgClass} from '@angular/common';


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


  constructor(private auth: AuthService, private reviewService: ReviewService) {  }

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
    console.log(event)
    console.log(review)
    // console.log(reviewService)
    if (this.uid === review.userId) {
     return this.reviewService.removeReview(review);
      // reviewItem.remove();
    }
    return this.load();
  }
  private load() {
    this.reviewService.getReview().subscribe((data) => {
      this.reviews = data;
      console.log(this.reviews);
    });
  }
  // getInfo() {
  //     this.auth.user.subscribe((user) => {
  //       this.user.userName = user.displayName;
  //       this.user.userPhoto = user.photoURL;
  //       this.user.email = user.email;
  //       this.user.userId = user.uid;
  //       this.user.comment = this.userComment;
  //     });
  //   // this.postReview();
  // }
  submitForm(form: NgForm) {
    const review: Review = {
      comment: form.value.userComment,
      userId: JSON.parse(window.localStorage.getItem('user')).uid,
      userName: JSON.parse(window.localStorage.getItem('user')).displayName,
      userPhoto: JSON.parse(window.localStorage.getItem('user')).photoURL,
      email: JSON.parse(window.localStorage.getItem('user')).email
    };
    if (form.valid === true) {
      this.postReview(review);
    }
    form.resetForm();
    console.log(form);
  }
}

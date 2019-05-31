import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {generalReviewService} from '../../shared/service/generalReview.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  user: any = {};
  reviews: any = {};
  userComment: string;
  link = '/reviews';

  constructor(private auth: AuthService, private gReview: generalReviewService) { }

  ngOnInit() {
    this.load();
  }
  private postReview() {
    this.gReview.postGeneralReview(this.user).then((data) => this.getGeneralReview());
  }

  private getGeneralReview() {
    this.gReview.getGeneralReview(this.link).subscribe((data) => (data));
  }
  private load() {
    this.gReview.getGeneralReview(this.link).subscribe((data) => {
      this.reviews = data;
      console.log(this.reviews);
    });
  }

  getInfo() {
    this.auth.user.subscribe((user) => {
      this.user.userName = user.displayName;
      this.user.userPhoto = user.photoURL;
      this.user.email = user.email;
      this.user.userId = user.uid;
      if (this.userComment) {
        this.user.comment = this.userComment;
      }
      this.postReview();
      console.log(this.user);
    });
  }
}

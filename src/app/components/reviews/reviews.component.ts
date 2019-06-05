import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {Review} from '../../shared/models/review';
import {ReviewService} from '../../shared/service/review.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  public idUser: string;
  public reviews: Review[];

  constructor(private auth: AuthService, private reviewService: ReviewService) {
    this.idUser = JSON.parse(window.localStorage.getItem('user')).uid;
  }

  ngOnInit() {
    this.reviewService.getAllUserReviews(this.idUser)
      .subscribe((data) => {
        this.reviews = data;
      });
  }
}

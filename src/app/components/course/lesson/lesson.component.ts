import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {VideoService} from '../../../shared/service/video.service';
import {Review} from '../../../shared/models/review';
import {ReviewService} from '../../../shared/service/review.service';
import {AdminService} from '../../../shared/service/admin.service';
import {NgForm} from '@angular/forms';
import {VideoReview} from '../../../shared/models/videoReview';
import {Lesson} from '../../../shared/models/lesson';
import { LESSONS} from '../../../shared/constants/lessons';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() id = '';
  user: any = {};
  reviews: Review[];
  userComment: any;
  uid = JSON.parse(window.localStorage.getItem('user')).uid;
  check: boolean;
  lessons: Lesson[] = LESSONS;
  link = ':link';


  constructor(private auth: AuthService, private reviewService: ReviewService, private admin: AdminService, private route: ActivatedRoute) {
    this.check = admin.isAdmin;
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.link = params['link'];
      console.log(this.link)
    })
  }
  // private postReview(videoReview: VideoReview) {
  //   this.reviewService.addReview(review).then((ref) => this.getReview());
  // }
  // private getReview() {
  //   this.reviewService.getReview().subscribe((data) => (data));
  // }
  // private deleteReview(event, videoReview: VideoReview) {
  //   if (this.uid === review.userId || this.check) {
  //     return this.reviewService.removeReview(review);
  //   }
  //   // return this.load();
  // }
  // private load() {
  //   this.videoReviewService.getReview().subscribe((data) => {
  //     this.reviews = data;
  //     console.log(this.reviews);
  //   });
  // }
  // submitForm(form: NgForm) {
  //   const videoReview: VideoReview = {
  //     comment: form.value.userComment,
  //     userId: JSON.parse(window.localStorage.getItem('user')).uid,
  //     userName: JSON.parse(window.localStorage.getItem('user')).displayName,
  //     userPhoto: JSON.parse(window.localStorage.getItem('user')).photoURL,
  //     email: JSON.parse(window.localStorage.getItem('user')).email
  //   };
  //   if (form.valid === true) {
  //     this.postReview(videoReview);
  //   }
  //   form.resetForm();
  //   console.log(form);
  // }
}

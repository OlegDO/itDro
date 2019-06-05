import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {VideoService} from '../../../shared/service/video.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  user: any = {};
  reviews: any = {};
  userComment: string;
  link = '/reviews';

  constructor(private auth: AuthService, private video: VideoService) { }

  ngOnInit() {
    this.load();
  }
  private postReview() {
    // this.video.getVideoReview(this.user).then((data) => this.getVideoReview());
  }

  private getVideoReview() {
    this.video.getVideoReview(this.link).subscribe((data) => (data));
  }
  private load() {
    this. video.getVideoReview(this.link).subscribe((data) => {
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
      // this.user.videoId = user.;
      if (this.userComment) {
        this.user.comment = this.userComment;
      }
      this.postReview();
      console.log(this.user);
    });
  }

  // deleteReview(event, reviewItem) {
  //   console.log(event);
  //   // this.load();
  // }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {VideoService} from '../../../shared/service/video.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  user: any = {};
  constructor(private auth: AuthService, private video: VideoService) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      console.log(user);
      // this.user = user;
      this.user.userName = 'oleg';
      this.user.userPhoto = 'sjkdf';
      this.user.videoId = 'lesson1';
      this.postReview();
    });
  }


  private postReview() {
    this.video.postReview(this.user).then(data => this.getReviewByLesson());
  }

  private getReviewByLesson() {
    this.video.getReviewByLesson('lesson1').subscribe((data)=> console.log('review', data));
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {VideoService} from '../../../shared/service/video.service';
import {Review} from '../../../shared/models/review';
import {ReviewService} from '../../../shared/service/review.service';
import {AdminService} from '../../../shared/service/admin.service';
import {NgForm} from '@angular/forms';
import {VideoReview} from '../../../shared/models/videoReview';
import {Lesson} from '../../../shared/models/lesson';
import {Task} from '../../../shared/models/task';
import { LESSONS} from '../../../shared/constants/lessons';
import {ActivatedRoute, Params} from '@angular/router';
import {TASKS} from '../../../shared/constants/tasks';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() id = '';
  user: any = {};
  userComment: any;
  uid = JSON.parse(window.localStorage.getItem('user')).uid;
  check: boolean;
  lessons: Lesson[] = LESSONS;
  link;
  videoReviews: VideoReview[];
  tasks: Task[] = TASKS;
  private userName: string;
  private userMail: string;


  constructor(private auth: AuthService, private videoService: VideoService, private admin: AdminService, private route: ActivatedRoute) {
    this.check = admin.isAdmin;
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.link = params['link'];
      this.load();
    });
  }
  private postVideoReview(videoReview: VideoReview) {
    this.videoService.addVideoReview(videoReview).then((ref) => this.getVideoReview());
  }
  private getVideoReview() {
    this.videoService.getVideoReview().subscribe((data) => (data));
  }
  private load() {
    this.videoService.getVideoReview().subscribe((data) => {
      this.videoReviews = data;
    });
  }
  submitForm(form: NgForm) {
    const videoReview: VideoReview = {
      comment: form.value.userComment,
      userId: JSON.parse(window.localStorage.getItem('user')).uid,
      userName: JSON.parse(window.localStorage.getItem('user')).displayName,
      userPhoto: JSON.parse(window.localStorage.getItem('user')).photoURL,
      email: JSON.parse(window.localStorage.getItem('user')).email,
      videoId: this.link
    };
    if (form.valid === true) {
      this.postVideoReview(videoReview);
    }
    console.log(videoReview)
    form.resetForm();
    console.log(form);
  }

  deleteReview($event: MouseEvent, videoReview: VideoReview) {
    if (this.uid === videoReview.userId || this.check) {
          return this.videoService.removeVideoReview(videoReview);
        }
        return this.load();
  }
  inspect($event, videoReview: VideoReview) {
    this.userName = videoReview.userName;
    this.userMail = videoReview.email;
  }
}

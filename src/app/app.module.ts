import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutComponent } from './components/about/about.component';



import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import {LessonFilterPipe} from './pipes/lessonFilter.pipe';
import {AuthService} from './shared/service/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {ProfileGuard} from './shared/service/profile.guard';
import {VideoService} from './shared/service/video.service';
import { LessonComponent } from './components/course/lesson/lesson.component';
import {ReviewService} from './shared/service/review.service';
import {AdminService} from './shared/service/admin.service';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    ReviewsComponent,
    AboutComponent,
    SearchComponent,
    LessonFilterPipe,
    ProfileComponent,
    NotFoundComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'itDro'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, ProfileGuard, VideoService, ReviewService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }

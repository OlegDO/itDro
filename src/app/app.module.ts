import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutComponent } from './components/about/about.component';
import { Lesson1Component } from './components/course/lesson1/lesson1.component';


import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Lesson2Component } from './components/course/lesson2/lesson2.component';
import { Lesson3Component } from './components/course/lesson3/lesson3.component';
import { Lesson4Component } from './components/course/lesson4/lesson4.component';
import { Lesson5Component } from './components/course/lesson5/lesson5.component';
import { Lesson6Component } from './components/course/lesson6/lesson6.component';
import { SearchComponent } from './components/search/search.component';
import {LessonFilterPipe} from './pipes/lessonFilter.pipe';
import {AuthService} from './shared/service/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {ProfileGuard} from './shared/service/profile.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    ReviewsComponent,
    AboutComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component,
    SearchComponent,
    LessonFilterPipe,
    ProfileComponent,
    NotFoundComponent
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
  providers: [AuthService, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

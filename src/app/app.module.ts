import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupportComponent } from './components/support/support.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutComponent } from './components/about/about.component';
import { Lesson1Component } from './components/course/lesson1/lesson1.component';
import { RulesComponent } from './components/reviews/rules/rules.component';


@NgModule({
  declarations: [
    AppComponent,
    SupportComponent,
    HomeComponent,
    CourseComponent,
    ReviewsComponent,
    AboutComponent,
    Lesson1Component,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

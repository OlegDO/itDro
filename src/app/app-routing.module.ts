import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupportComponent} from './components/support/support.component';
import {HomeComponent} from './components/home/home.component';
import {CourseComponent} from './components/course/course.component';
import {AboutComponent} from './components/about/about.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {Lesson1Component} from './components/course/lesson1/lesson1.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'support', component: SupportComponent},
  {path: 'course', component: CourseComponent},
  {path: 'about', component: AboutComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'course/lesson1' , component: Lesson1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CourseComponent} from './components/course/course.component';
import {AboutComponent} from './components/about/about.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {Lesson1Component} from './components/course/lesson1/lesson1.component';
import {Lesson2Component} from './components/course/lesson2/lesson2.component';
import {Lesson3Component} from './components/course/lesson3/lesson3.component';
import {Lesson5Component} from './components/course/lesson5/lesson5.component';
import {Lesson4Component} from './components/course/lesson4/lesson4.component';
import {Lesson6Component} from './components/course/lesson6/lesson6.component';
import {SearchComponent} from './components/search/search.component';
import {ProfileComponent} from './components/profile/profile.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ProfileGuard} from './shared/service/profile.guard';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]},
  {path: 'course/lesson1' , component: Lesson1Component},
  {path: 'course/lesson2', component: Lesson2Component},
  {path: 'course/lesson3', component: Lesson3Component},
  {path: 'course/lesson4', component: Lesson4Component},
  {path: 'course/lesson5', component: Lesson5Component},
  {path: 'course/lesson6', component: Lesson6Component},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

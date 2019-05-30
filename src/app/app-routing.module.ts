import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CourseComponent} from './components/course/course.component';
import {AboutComponent} from './components/about/about.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {SearchComponent} from './components/search/search.component';
import {ProfileComponent} from './components/profile/profile.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ProfileGuard} from './shared/service/profile.guard';
import {LessonComponent} from './components/course/lesson/lesson.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]},
  {path: 'course/:link' , component: LessonComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

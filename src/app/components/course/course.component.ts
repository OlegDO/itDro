import { Component, OnInit } from '@angular/core';
import {LESSONS} from '../../shared/constants/lessons';
import {Lesson} from '../../shared/models/lesson';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
lessons: Lesson[] = LESSONS;
  constructor() { }

  ngOnInit() {
  }

}

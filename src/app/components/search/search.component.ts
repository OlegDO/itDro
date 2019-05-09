import { Component, OnInit } from '@angular/core';
import {LESSONS} from '../../shared/constants/lessons';
import {Lesson} from '../../shared/models/lesson';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchLesson = '';
  lessons: Lesson[] = LESSONS;

  constructor() { }

  ngOnInit() {
  }

}

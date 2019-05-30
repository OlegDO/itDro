import {Lesson} from '../models/lesson';

// @ts-ignore
export const LESSONS: Lesson[] = [
  // Lesson 1
  { title : 'Что такое JavaScript?', link: 'lesson1', type: 'intro', nextPageLink: 'lesson2', previousPageLink: 'lesson1', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson1V2.mp4?alt=media&token=39c2fb20-b52a-475e-af1d-19f1725e9876'},
  // Lesson 2
  { title : 'Инструменты разработки.', link: 'lesson2', type: 'intro', nextPageLink: 'lesson3', previousPageLink: 'lesson1', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson2V2.mp4?alt=media&token=60226ec1-e3b7-4d1f-b388-74dc2c93f4b3'},
  // Lesson 3
  { title : 'Создание первой программы, скрипты.', link: 'lesson3', type: 'core', nextPageLink: 'lesson4', previousPageLink: 'lesson2', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson3V2.mp4?alt=media&token=2fd0851f-a7fb-4963-bfe4-81f627671513'},
  // Lesson 4
  { title : 'Структура кода, современный стандарт.', link: 'lesson4', type: 'core', nextPageLink: 'lesson5', previousPageLink: 'lesson3',  src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson4V2.mp4?alt=media&token=a7421064-c30d-48fe-b6ba-b8b45fd5b5f2'},
  // Lesson 5
  { title : 'Переменные и типы данных.', link: 'lesson5', type: 'core', nextPageLink: 'lesson6', previousPageLink: 'lesson4', src: ''},
  // Lesson 6
  { title : 'Операторы сравнения, условные и логические.', link: 'lesson6', type: 'core', nextPageLink: 'lesson7', previousPageLink: 'lesson5', src: ''}
];

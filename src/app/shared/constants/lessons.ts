import {Lesson} from '../models/lesson';

// @ts-ignore
export const LESSONS: Lesson[] = [
  // Lesson 1
  { title : 'Что такое JavaScript?', link: 'lesson1', type: 'intro', nextPageLink: 'lesson2', previousPageLink: 'lesson1', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson1V3.mp4?alt=media&token=0b3379d0-d96c-419e-839b-9e2484f3277a'},
  // Lesson 2
  { title : 'Инструменты разработки', link: 'lesson2', type: 'intro', nextPageLink: 'lesson3', previousPageLink: 'lesson1', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson2V2.mp4?alt=media&token=60226ec1-e3b7-4d1f-b388-74dc2c93f4b3'},
  // Lesson 3
  { title : 'Создание первой программы, скрипты', link: 'lesson3', type: 'core', nextPageLink: 'lesson4', previousPageLink: 'lesson2', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson3V2.mp4?alt=media&token=2fd0851f-a7fb-4963-bfe4-81f627671513'},
  // Lesson 4
  { title : 'Структура кода, современный стандарт', link: 'lesson4', type: 'core', nextPageLink: 'lesson5', previousPageLink: 'lesson3',  src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson4V2.mp4?alt=media&token=a7421064-c30d-48fe-b6ba-b8b45fd5b5f2'},
  // Lesson 5
  { title : 'Переменные и типы данных', link: 'lesson5', type: 'core', nextPageLink: 'lesson6', previousPageLink: 'lesson4', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson5.mp4?alt=media&token=d034b32d-7da8-44ed-81d5-6c343ff3d5e3'},
  // Lesson 6
  { title : 'Операторы сравнения', link: 'lesson6', type: 'core', nextPageLink: 'lesson7', previousPageLink: 'lesson5', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson6.mp4?alt=media&token=76fb8304-0b85-47d0-bea9-74877fcdaa1a'},
  // Lesson 7
  { title : 'Условные операторы', link: 'lesson7', type: 'core', nextPageLink: 'lesson8', previousPageLink: 'lesson6', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson7.mp4?alt=media&token=db598741-d377-42c7-bc0d-4321a309b75d'},
  // Lesson 8
  { title : 'Преобразование типов', link: 'lesson8', type: 'core2', nextPageLink: 'lesson9', previousPageLink: 'lesson7', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson8.mp4?alt=media&token=fb09bbb1-f5e1-41f1-be5a-32ec24401c91'},
  // Lesson 9
  { title : 'Циклы while, do while, for', link: 'lesson9', type: 'core2', nextPageLink: 'lesson10', previousPageLink: 'lesson8', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson9.mp4?alt=media&token=e3b7f4ae-0772-4c08-aa72-379073325295'},
  // Lesson 10
  { title : 'Switch и как он работает', link: 'lesson10', type: 'core2', nextPageLink: 'lesson11', previousPageLink: 'lesson9', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson10.mp4?alt=media&token=7a0b70bf-10d8-463d-86b6-d6b4c88c0fce'},
  // Lesson 11
  { title : 'Функции? Что это такое?', link: 'lesson11', type: 'core2', nextPageLink: 'lesson12', previousPageLink: 'lesson10', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson11.mp4?alt=media&token=9671ec96-cc1f-4ec4-8a56-cdd6dc4acf3f'},
  // Lesson 12
  { title : 'Методы? Свойтсва?', link: 'lesson12', type: 'data-structure', nextPageLink: 'lesson13', previousPageLink: 'lesson11', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson12V3.mp4?alt=media&token=b3eaee42-48b5-4cb8-a87b-24a080bef814'},
  // Lesson 13
  { title : 'Числа, их методы и библиотека Math', link: 'lesson13', type: 'data-structure', nextPageLink: 'lesson14', previousPageLink: 'lesson12', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson13V3.mp4?alt=media&token=8d5edae0-8904-4dc1-8eab-53539489e8ec'},
  // Lesson 14
  { title : 'Строки, их методы и свойтсва', link: 'lesson14', type: 'data-structure', nextPageLink: 'lesson15', previousPageLink: 'lesson13', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson14.mp4?alt=media&token=3ad5b03c-4563-441e-99fb-ff434b633004'},
  // Lesson 15
  { title : 'Объекты', link: 'lesson15', type: 'data-structure', nextPageLink: 'lesson16', previousPageLink: 'lesson14', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson15.mp4?alt=media&token=45cef94b-62b1-474f-95d8-25892887ccb9'},
  // Lesson 16
  { title : 'Перебор свойств объекта', link: 'lesson16', type: 'data-structure', nextPageLink: 'lesson17', previousPageLink: 'lesson15', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson16.mp4?alt=media&token=3bfcce43-4259-45f2-a953-ac7e320e497d'},
  // Lesson 17
  { title : 'Как передаются объекты', link: 'lesson17', type: 'data-structure', nextPageLink: 'lesson18', previousPageLink: 'lesson16', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson17.mp4?alt=media&token=f249b336-5f18-447d-bfcb-5a37fe6217fa'},
  // Lesson 18
  { title : 'Массивы', link: 'lesson18', type: 'data-structure2', nextPageLink: 'lesson19', previousPageLink: 'lesson17', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson18.mp4?alt=media&token=2b2335a2-c691-40f9-ab65-316b02f682d7'},
  // Lesson 19
  { title : 'Методы массивов', link: 'lesson19', type: 'data-structure2', nextPageLink: 'lesson20', previousPageLink: 'lesson18', src: 'https://firebasestorage.googleapis.com/v0/b/itdro-6a5c5.appspot.com/o/lesson19.mp4?alt=media&token=e45e4763-1de7-4575-946b-e9343210c6d7'},
  // Lesson 20
  { title : 'Переберающие методы массивов', link: 'lesson20', type: 'data-structure2', nextPageLink: 'lesson20', previousPageLink: 'lesson19', src: ''},
];

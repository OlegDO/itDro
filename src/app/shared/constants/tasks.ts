import { Task } from '../models/task';
import {prepareProfile} from 'selenium-webdriver/firefox';


export const TASKS: Task[] = [
  // Lesson 1
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson1', question: 'Дайте определение языку JavaScript', task: 'JavaScript - мультипарадигменный язык программирования'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson1', question: 'JavaScript и Java предназначены для выполнения одних и тех же задач?', task: 'Нет. Java и JavaScript 2 совершенно разных языка программирования, которые предназначены для реализации разных задач'},
  // Lesson 2
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson2', question: 'Что такое IDE', task: 'IDE называется интегрированная среда разработки.'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson2', question: 'В чем преимущество легких редакторов?', task: 'В легких редакторах слегче отредактировать 1 файл, чем загружать в IDE целый проект. То есть вы экономите время'},
  // Lesson 3
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson3', question: 'Как подключить скрипт к шаблону?', task: 'Необходимо использовать тег - ' + '<script src="ПУТЬ"></script>' },
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson3', question: 'Расскажите о функционале функции alert()', task: 'alert выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК»'},
  // Lesson 4
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson4', question: 'Где объявляется директива use strict?', task: 'В начале вашего скрипт-файла'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson4', question: 'Почему use strict опасен для старого кода?', task: 'Некоторые библиотеки, которые написаны без "use strict", не всегда корректно работают, если вызывающий код содержит\n "use strict"'},
  // Lesson 5
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson5', question: 'Назовите типы данных в JavaScript', task: 'Number, String, Boolean, Null, Undefined И и Object'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson5', question: 'Выведите с помощью функции alert() переменную name, в которой будет содержаться ваше имя.', task: '<script>\nvar name=\'oleg\';\n alert(name);\n</script>'},
  // Lesson 6
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson6', question: 'Назовите операторы сравнения', task: ' <, >, <=, >=,  !=, ==,  ===, !=='},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson6', question: 'Что выведет выражение 0 == false и 0 === false. Поясните', task: 'В первом случае, выражение вернет - true, тк при при не строгом сравнеии происходит привведение типов и false станет 0.\nВо втором случае, при строгом сравнеии, учавствуют 2 занчения разных типов: boolean и number, поэтому данное\nвыражение вернет - false'},
  // Lesson 7
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson7', question: 'Опишите структуру условного оператора if', task: 'if (условие) { \n действие если true\n  } else { \n действие если false \n }'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson7', question: 'Выведится ли alert?\n  if ("0") {' +
      '  alert( \'Привет\' ); ' +
      '}', task: 'Да, выведется, т.к. внутри if стоит строка "0".' +
      '' +
      'Любая строка, кроме пустой (а здесь она не пустая), в логическом контексте является\ntrue.'},
  { coll: '#collapseThree', collapse: 'collapseThree', heading: 'headingThree', lessonId: 'lesson7', question: 'Перепишите if с использованием оператора \'?\': \n if (num1 + num2 < 10) {' +
      '  result = \'Мало\';' +
      '} else {' +
      '  result = \'Много\';' +
      '}', task: 'result = (num1 + num2 < 10) ? \'Мало\' : \'Много\';'},
  // Lesson 8
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson8', question: 'Каким будет результат выражения: "2" * "3"', task: '6'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson8', question: 'Каким будет результат выражения: 4 + 5 + "px"', task: '\'45px\''},
  { coll: '#collapseThree', collapse: 'collapseThree', heading: 'headingThree', lessonId: 'lesson8', question: 'Каким будет результат выражения: true + false', task: '1'},
  { coll: '#collapseFour', collapse: 'collapseFour', heading: 'headingFour', lessonId: 'lesson8', question: 'Каким будет результат выражения: null + 2', task: '2'},
  { coll: '#collapseFive', collapse: 'collapseFive', heading: 'headingFive', lessonId: 'lesson8', question: 'Каким будет результат выражения: undefined + 3', task: 'NaN'},
  { coll: '#collapseSix', collapse: 'collapseSix', heading: 'headingSix', lessonId: 'lesson8', question: 'Каким будет результат выражения: -7 / 0', task: '-Infinity'},
  // Lesson 9
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson9', question: 'Перечислите значения, которые выведет данная конструкция\n var i = 5;' +
      '\n ' +
      'while (i) {' +
      'alert( i-- );' +
      '}', task: '5, 4, 3 , 2, 1'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson9', question: 'Перепишите код, заменив цикл while на for\n  var i = 0;\n' +
      'while (i < 5) {' +
      '  alert(i);\n' +
      '  i++;' +
      '}', task: 'for (var i = 0; i < 5; i++) {\n ' +
      '  alert(i);' +
      '\n }'},
  // Lesson 10
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson10', question: 'Верно ли высказывание: Конструкция switch заменяет собой сразу несколько if', task: 'Да, верно.'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson10', question: 'Перепешите в switch \nvar a = +prompt(\'Введите число\', \'\');' +
      '\n' +
      'if (a == 0) {' +
      '  alert( 0 );' +
      '}\n' +
      'if (a == 1) {' +
      '  alert( 1 );' +
      '}\n' +
      'if (a == 2 || a == 3) {' +
      '  alert( \'2,3\' );' +
      '}', task: 'var a = +prompt(\'Введите число\', \'\');\n' +
      '\n' +
      'switch (a) {\n' +
      '  case 0:\n' +
      '    alert( 0 );\n' +
      '    break;\n' +
      '\n' +
      '  case 1:\n' +
      '    alert( 1 );\n' +
      '    break;\n' +
      '\n' +
      '  case 2:\n' +
      '  case 3:\n' +
      '    alert( \'2,3\' );\n' +
      '    break;\n' +
      '}'},
  // Lesson 11
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson11', question: 'Объявите функцию, которая выводит в alert() ваше имя, имя вы передается непосредственно в параметр функции, при вызове', task: 'function getName(name) { \nalert(name) \n};\n getName(\'oleg\');'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson11', question: 'Объявите функции, которая является мультипликатором 2 значений. Результат данной функции запишите в переменную и \nвыведите ее в alert()', task: 'function mul(a, b) { \nreturn a*b; \n}; \nconsole.log(x = mul(5,4))'},
  // Lesson 12
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson12', question: 'Как отличить метод от свойства?', task: 'Метод принимает аргументы (параметры), поэтому пишется с (), свойство же работает и пишется противоположно методу'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson12', question: 'Что делает свойство length?', task: 'Возвращает длину строки, массива'},
  // Lesson 13
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson13', question: 'Назовите название библиотеки, которая помогает программисту в работе с математическими операциями', task: 'Math'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson13', question: 'Напишите скрипт, который проверяет введенное пользователем число на число', task: 'var x = prompt("Введите значение", "");\n' +
      '\n' +
      'if (isNaN(x)) {\n' +
      '  alert( "Не число" );\n' +
      '} else {\n' +
      '  alert( "Число" );\n' +
      '}'},
  // Lesson 14
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson14', question: 'Приведите пример методов смены регистра', task: '\'oleg\'.toUpperCase;\n\'oleg\'.toLowerCase;'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson14', question: 'Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:', task: 'function ucFirst(str) {\n' +
      '  if (!str) return str;\n' +

      '  return str[0].toUpperCase() + str.slice(1);\n' +
      '}\n' +
      'alert( ucFirst("oleg") );'},
  // Lesson 15
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson15', question: 'Создайте пустой объект user. ' +
      'Добавьте свойство name со значением Олег. ' +
      'Добавьте свойство surname со значением Евмолов.\n' +
      'Поменяйте значение name на Максим. ' +
      'Удалите свойство name из объекта.', task: 'var user = {};\n' +
      'user.name = "Олег";\n' +
      'user.surname = "Евмолов";\n' +
      'user.name = "Максим";\n' +
      'delete user.name;'},
  // { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson15', question: '', task: ''},
  // Lesson 16
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson16', question: 'Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.', task: 'var salaries = {\n' +
      '  "Олег: 1000,\n' +
      '  "Саша": 800,\n' +
      '  "Мария": 1000\n' +
      '};\n' +
      '\n' +
      'var max = 0;\n' +
      'var winner = "";\n' +
      'for (var key in salaries) {\n' +
      '  if (max < salaries[key]) {\n' +
      '    max = salaries[key];\n' +
      '    winner = key;\n' +
      '  }\n' +
      '}\n' +
      'alert(winner);'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson16', question: 'Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.', task: 'var salaries = {\n' +
      '  "Олег: 1000,\n' +
      '  "Саша": 800,\n' +
      '  "Мария": 1000\n' +
      '};\n' +
      '\n' +
      'var sum = 0;\n' +
      'for (var key in salaries) {\n' +
      '  sum += salaries[key];\n' +
      '}\n' +
      '\n' +
      'alert(sum);'},
  // Lesson 17
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson17', question: 'Как передаются объекты, а как примитивы?', task: 'Объекты передаются по ссылке, а примитивы по значению'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson17', question: 'Создайте объект с любыми полями и скопируйте его', task: 'var user = {\n' +
      '  name: "Олег",\n' +
      '  age: 19\n' +
      '};\n' +
      '\n' +
      'var clone = {};\n' +
      'for (var key in user) {\n' +
      '  clone[key] = user[key];\n' +
      '}\n' +
      'clone.name = "Не олег";\n' +
      '\n' +
      'alert(user.name);}' +
      '\n' +
      'alert(clone.name);}'},
  // Lesson 18
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson18', question: 'Какие типы данных могут храниться в массиве?', task: 'Все, которые присуще языку JavasScript:\nnumber, string, boolean, null, undefined, obj, а также массив может хранить массивы'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson18', question: 'Создайте массив, в котором лежит 5 элементов и выведите в консоль последний элемент массива, используя свойство', task: 'var arr = [1, 2, 3, 4, 5, 6, 7];\nconsole.log(arr[arr.length-1]);'},
  // Lesson 19
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson19', question: 'Дана строка: names = \'Маша, Петя, Марина, Василий\'; Получите массив', task: 'var arr = names.split(\', \');\n' +
      '\n' +
      'for (var i = 0; i < arr.length; i++) {\n' +
      '  alert( \'Вам сообщение \' + arr[i] );\n' +
      '}'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson19', question: 'Создайте массив, длинна которого больше 2, где значения являются строковыми. Получите строку из основанного вами массива', task: 'var arr = [\'Маша\', \'Петя\', \'Марина\', \'Василий\'];\n' +
      '\n' +
      'var str = arr.join(\', \');\n' +
      '\n' +
      'alert( str );'},
  // Lesson 20
  { coll: '#collapseOne', collapse: 'collapseOne', heading: 'headingOne', lessonId: 'lesson20', question: 'Что такое callback', task: 'Функция которая передается в переберающие методы массива'},
  { coll: '#collapseTwo', collapse: 'collapseTwo', heading: 'headingTwo', lessonId: 'lesson20', question: 'Создайте массив чисел от -4 до 4, выведите те числа, которые являются отрицательными, числа -4 и 4 добавьте с помощью\n методов', task: 'var arr = [-3, -2, -1, 0, 1, 2 ,3];\n' +
      '\n' +
      'arr.push(4)' +
      '\n' +
      'arr.unshift(-4)' +
      '\n' +
      'var result = arr.filter(function(number) {\n' +
      '  return number > 0;\n' +
      '});\n' +
      '\n' +
      'alert(result); // 1,2,3'},
  { coll: '#collapseThree', collapse: 'collapseThree', heading: 'headingThree', lessonId: 'lesson20', question: 'Создайте массив пустой массив, заполните его числами. Прибавьте к каждому элемента массива число, которое введет\n пользователь', task: 'var arr = [];\n' +
      'arr.push(4, 3, 7, 8)\n' +
      'var userText = prompt(\'Введите число\', \'\');\n' +
      'var result = arr.map(function(item) { return item * userText} )\n' +
      'alert(result)'},
];

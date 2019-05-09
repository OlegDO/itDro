import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lessonFilter'
})
export class LessonFilterPipe implements PipeTransform{
  transform(lessonList, searchStr: string) {
    if(lessonList.length === 0 || searchStr === '') {
      return lessonList;
    }
    return lessonList.filter((lesson) => lesson.title.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }
}

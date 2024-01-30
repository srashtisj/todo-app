import { Pipe, PipeTransform } from '@angular/core';
import { IToDo } from '../models/todo.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: IToDo[], searchText: string): IToDo[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.todo.toLocaleLowerCase().includes(searchText);
    });
  }

}

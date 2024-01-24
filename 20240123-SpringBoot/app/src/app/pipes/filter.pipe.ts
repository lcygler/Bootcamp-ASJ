import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], filter: any): any {
    if (!filter || filter === 'Todos') return array;

    return array.filter((item) =>
      item.categoria.toLowerCase().includes(filter.toLowerCase())
    );
  }
}

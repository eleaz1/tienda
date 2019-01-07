import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(value: string[], q: string) {
    if (!q || q === '') {
      return value;
    }
    return value.filter(item => {
      return (-1 < item['name'].toLowerCase().indexOf(q.toLowerCase()));
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString',
})
export class ToStringPipe implements PipeTransform {
  transform(value: any, separador: any): string {
    return value.join(separador);
    // return value.toString();
  }
}

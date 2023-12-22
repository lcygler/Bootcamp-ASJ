import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'potencia',
})
export class PotenciaPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args != null) {
      let exponente = parseInt(args);
      return Math.pow(value, exponente);
    } else {
      return 'Falta el parámetro!';
    }
  }
}

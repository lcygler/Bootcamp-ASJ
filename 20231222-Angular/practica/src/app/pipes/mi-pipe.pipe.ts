import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe',
})
export class MiPipePipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    if (args && args.length > 0) {
      const idioma = args[0];

      if (idioma === 'ingles') {
        return 'Hello';
      } else if (idioma === 'italiano') {
        return 'Ciao';
      } else if (idioma === 'aleman') {
        return 'Hallo';
      } else {
        return 'Error';
      }
    } else {
      return value + ' [ Creado por miPipe]';
    }
  }
}

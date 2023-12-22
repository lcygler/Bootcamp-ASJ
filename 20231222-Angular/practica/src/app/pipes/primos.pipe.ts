import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primos',
})
export class PrimosPipe implements PipeTransform {
  transform(numeros: number[]): number[] {
    return numeros.filter((num) => this.esPrimo(num));
  }

  private esPrimo(numero: number): boolean {
    if (numero < 2) {
      return false;
    }

    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return true;
  }
}

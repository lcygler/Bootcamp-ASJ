import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  nombre = 'John';
  apellido = 'DOE';
  lorem = 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem';
  total = 1000;
  fecha = new Date();
  numeros = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  objeto = {
    nombre: this.nombre,
    apellido: this.apellido,
    total: this.total,
  };
}

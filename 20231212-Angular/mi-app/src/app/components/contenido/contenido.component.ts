import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent {
  title = "Componente 'CONTENIDO'";
  num = 0;

  generarAleatorio() {
    this.num = Math.floor(Math.random() * 100 + 1);
  }

  incrementar() {
    this.num++;
  }

  decrementar() {
    this.num--;
  }
}

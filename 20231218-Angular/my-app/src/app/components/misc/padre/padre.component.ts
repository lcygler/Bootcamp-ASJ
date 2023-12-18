import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  datoHijoAPadre: string = '';

  recibirMensaje(mensaje: string) {
    this.datoHijoAPadre = mensaje;
  }

  contenidoInput: string = '';

  mostrarValor(texto: string) {
    this.contenidoInput = texto;
  }
}

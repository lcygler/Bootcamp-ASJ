import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  // Comunicación Padre a Hijo
  @Input() datoPadreAHijo: string = '';

  // Comunicación Hijo a Padre
  @Output() eventoHijoAPadre: EventEmitter<string>;

  constructor() {
    this.eventoHijoAPadre = new EventEmitter();
  }

  enviarMensaje(mensaje: string) {
    this.eventoHijoAPadre.emit(mensaje);
  }
}

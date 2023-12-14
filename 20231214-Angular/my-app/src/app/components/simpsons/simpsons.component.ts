import { Component } from '@angular/core';

@Component({
  selector: 'app-simpsons',
  templateUrl: './simpsons.component.html',
  styleUrls: ['./simpsons.component.css'],
})
export class SimpsonsComponent {
  nuevoPersonaje: any = {};
  personajes: any[] = [];

  agregarPersonaje() {
    // Validar campos
    const camposValidos =
      this.nuevoPersonaje.nombre &&
      this.nuevoPersonaje.imagen &&
      this.nuevoPersonaje.rol;

    if (camposValidos) {
      // Agregar personaje
      this.personajes.push({
        nombre: this.nuevoPersonaje.nombre,
        imagen: this.nuevoPersonaje.imagen,
        rol: this.nuevoPersonaje.rol,
      });

      // Limpiar formulario
      this.nuevoPersonaje = {};
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  eliminarPersonajes() {
    const confirm = window.confirm(
      '¿Está seguro de que desea eliminar todos los personajes?'
    );

    if (confirm) {
      this.personajes = [];
    }
  }
}

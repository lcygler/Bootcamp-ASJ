import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usuarios: any = [];
  mensajeAlerta: string = '';

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.list();
  }

  // Listar usuarios
  list() {
    this.userService.getUsers().subscribe((res) => {
      console.log('Respuesta del GET:', res);
      this.usuarios = res.data;
    });
  }

  resetForm(form: NgForm) {
    form.reset();

    this.userService.datosUsuario = {
      id: -1,
    };

    setTimeout(() => {
      this.mensajeAlerta = '';
    }, 2500);
  }

  // Nuevo usuario
  create(form: NgForm) {
    if (form.value.id !== -1) {
      // Actualizar usuario
      this.userService.updateUser(form.value).subscribe((res) => {
        console.log('Respuesta del PUT:', res);
        this.mensajeAlerta = 'Usuario actualizado correctamente.';
        this.resetForm(form);
        this.list();
      });
    } else {
      // Validar formulario
      if (!form.valid) {
        console.log('Formulario inválido');
        return;
      }

      console.log('Formulario:', form.value);

      // Crear usuario
      const usuario = {
        name: form.value.name,
        job: form.value.job,
      };

      this.userService.createUser(usuario).subscribe((res) => {
        console.log('Respuesta del POST:', res);
        this.mensajeAlerta = 'Usuario creado correctamente.';
        this.resetForm(form);
        this.list();
      });
    }
  }

  /*
  create(form: NgForm) {
    console.log('Formulario:', form.value);

    this.userService.createUser(form.value).subscribe((res) => {
      console.log('Respuesta del POST:', res);
      form.reset();
      this.list();
    });
  }
  */

  // Eliminar usuario
  delete(id: number) {
    const result = confirm(`¿Desea eliminar el usuario #${id}?`);

    if (result) {
      this.userService.deleteUser(id).subscribe((res) => {
        console.log('Respuesta del DELETE:', res);
        this.list();
      });
    }
  }

  // Modificar usuario
  update(usuario: any) {
    console.log('Usuario:', usuario);

    this.userService.datosUsuario = {
      id: usuario.id,
      name: usuario.first_name,
      job: 'Astronauta',
    };
  }
}

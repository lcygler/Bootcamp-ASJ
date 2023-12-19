import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://reqres.in/api/users';

  datosUsuario: any = {
    id: -1,
    name: '',
    job: '',
  };

  // GET Usuarios
  public getUsers(): Observable<any> {
    console.log('HTTP GET');
    return this.http.get(this.API_URL);
  }

  // POST Usuario
  public createUser(usuario: any): Observable<any> {
    console.log('HTTP POST');
    return this.http.post(this.API_URL, usuario);
  }

  // DELETE Usuario
  public deleteUser(id: number): Observable<any> {
    console.log('HTTP DELETE');
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  // UPDATE Usuario
  public updateUser(usuario: any): Observable<any> {
    console.log('HTTP UPDATE');
    return this.http.put(`${this.API_URL}/${this.datosUsuario.id}`, usuario);
  }
}

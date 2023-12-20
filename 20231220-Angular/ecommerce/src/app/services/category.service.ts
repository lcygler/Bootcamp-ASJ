import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://api.escuelajs.co/api/v1/categories';

  public getProductsByCategory(id: any): Observable<any> {
    return this.http.get(this.API_URL + '/' + id + '/products');
  }
}

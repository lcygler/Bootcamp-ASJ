import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://api.escuelajs.co/api/v1/products';

  public getProducts(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  public getProductById(id: any): Observable<any> {
    return this.http.get(this.API_URL + '/' + id);
  }
}

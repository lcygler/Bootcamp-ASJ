import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'https://api.escuelajs.co/api/v1';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get(`${this.API_URL}/products`);
  }

  public getProductById(productId: any): Observable<any> {
    return this.http.get(`${this.API_URL}/products/${productId}`);
  }

  public getProductsByCategory(categoryId: any): Observable<any> {
    return this.http.get(`${this.API_URL}/categories/${categoryId}/products`);
  }
}

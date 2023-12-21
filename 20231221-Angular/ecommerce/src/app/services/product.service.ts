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

  public getProductsByName(productName: string): Observable<any> {
    return this.http.get(`${this.API_URL}/products/?title=${productName}`);
  }

  public getProductsByPrice(productPrice: number): Observable<any> {
    return this.http.get(`${this.API_URL}/products/price=${productPrice}`);
  }

  public getProductsByPriceRange(
    minPrice: number,
    maxPrice: number
  ): Observable<any> {
    return this.http.get(
      `${this.API_URL}/products/?price_min=${minPrice}&price_max=${maxPrice}`
    );
  }

  public getFilteredProducts(
    productName: string,
    productPrice: number,
    minPrice: number,
    maxPrice: number,
    categoryId: number
  ): Observable<any> {
    let url = `${this.API_URL}/products/?`;

    if (productName !== null && productName !== '' && productName !== 'all')
      url += `&title=${productName}`;
    if (productPrice > 0) url += `&price=${productPrice}`;
    if (minPrice > 0) url += `&price_min=${minPrice}`;
    if (maxPrice > 0) url += `&price_max=${maxPrice}`;
    if (categoryId > 0) url += `&categoryId=${categoryId}`;

    console.log('URL API', url);

    return this.http.get(url);
  }
}

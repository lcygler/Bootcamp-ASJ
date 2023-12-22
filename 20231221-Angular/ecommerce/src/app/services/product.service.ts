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
    const MIN_VALUE: number = 1;
    const MAX_VALUE: number = 100000000; // 100M

    let url = `${this.API_URL}/products`;
    const params: string[] = [];

    if (productName && productName !== 'all') {
      params.push(`title=${productName}`);
    }

    if (productPrice && productPrice > 0) {
      params.push(`price=${productPrice}`);
    }

    if (minPrice && minPrice > 0) {
      params.push(`price_min=${minPrice}`);
    } else if (maxPrice && maxPrice > 0) {
      params.push(`price_min=${MIN_VALUE}`);
    }

    if (maxPrice && maxPrice > 0) {
      params.push(`price_max=${maxPrice}`);
    } else if (minPrice && minPrice > 0) {
      params.push(`price_max=${MAX_VALUE}`);
    }

    if (categoryId && categoryId > 0) {
      params.push(`categoryId=${categoryId}`);
    }

    if (params.length > 0) {
      url += `/?${params.join('&')}`;
    }

    console.log('API URL:', url);
    return this.http.get(url);
  }

  public getCategories() {
    return this.http.get(`${this.API_URL}/categories`);
  }
}

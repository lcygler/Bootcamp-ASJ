import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any = [];
  private total: number = 0;

  constructor() {}

  public getCart(): any[] {
    return this.cart;
  }

  public getTotal(): number {
    return this.total;
  }

  public add(product: any): void {
    const existingProduct = this.cart.find((p: any) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
      this.total += existingProduct.price;
      console.log('Se actualizó la cantidad.');
    } else {
      product.quantity = 1;
      this.cart.push(product);
      this.total += product.price;
      console.log('Se agregó el producto al carrito.');
    }

    console.log('Carrito:', this.cart);
  }

  public delete(product: any): void {
    const index = this.cart.indexOf(product);

    if (index !== -1) {
      this.total -= product.price * product.quantity;
      this.cart.splice(index, 1);
    }
  }

  public reset(): void {
    this.cart = [];
    this.total = 0;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any = [];
  private cartTotal: number = 0;

  constructor() {}

  public getCartItems(): any[] {
    return this.cartItems;
  }

  public getCartTotal(): number {
    return this.cartTotal;
  }

  public addItem(product: any): void {
    const existingProduct = this.cartItems.find(
      (p: any) => p.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity++;
      this.cartTotal += existingProduct.price;
      console.log('Se actualizó la cantidad.');
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
      this.cartTotal += product.price;
      console.log('Se agregó el producto al carrito.');
    }

    console.log('Carrito:', this.cartItems);
  }

  public removeItem(product: any): void {
    const index = this.cartItems.indexOf(product);

    if (index !== -1) {
      this.cartTotal -= product.price * product.quantity;
      this.cartItems.splice(index, 1);
    }
  }

  public clearCart(): void {
    this.cartItems = [];
    this.cartTotal = 0;
  }
}

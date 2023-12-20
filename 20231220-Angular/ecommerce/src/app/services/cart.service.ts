import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any = [];
  private total = 0;

  constructor() {}

  public getCart(): any[] {
    return this.cartItems;
  }

  public addCart(product: any): void {
    const productFind = this.cartItems.find(
      (productoCart: any) => productoCart.id === product.id
    );

    if (productFind) {
      productFind.cantidad++;
      this.total += productFind.price;
      console.log('Sumar cantidad', this.cartItems);
    } else {
      product.cantidad = 1;
      this.cartItems.push(product);
      this.total += product.price;
      console.log('agregar producto', this.cartItems);
    }
  }

  public deleteProduct(product: any): void {
    const index = this.cartItems.indexOf(product);

    if (index !== -1) {
      this.total -= product.price * product.cantidad;
      this.cartItems.splice(index, 1);
    }
  }

  public getTotal(): number {
    return this.total;
  }

  public resetCart(): void {
    this.cartItems = [];
    this.total = 0;
  }
}

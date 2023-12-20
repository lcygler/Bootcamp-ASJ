import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: any = [];
  message: string = '';

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.cart = this.cartService.getCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  buy() {
    const result = confirm('¿Desea realizar esta compra?');

    if (result) {
      this.message = 'Se realizó la compra correctamente!';

      setTimeout(() => {
        this.message = '';
      }, 2000);

      this.cartService.reset();
      this.list();
    }
  }

  delete(product: any) {
    const result = confirm('¿Desea eliminar este producto?');

    if (result) {
      this.cartService.delete(product);
      this.list();
    }
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
}

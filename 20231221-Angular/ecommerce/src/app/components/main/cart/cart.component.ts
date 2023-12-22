import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  message: string = '';

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartItems();
  }

  private updateCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  getCartTotal() {
    return this.cartService.getCartTotal();
  }

  processPurchase() {
    const result = confirm('Do you want to proceed to checkout?');

    if (result) {
      this.message =
        'The purchase was successful.<br>Thank you for your order! 😄';

      setTimeout(() => {
        this.message = '';
      }, 2500);

      this.cartService.clearCart();
      this.updateCartItems();
    }
  }

  removeItem(product: any) {
    const result = confirm('Are you sure you want to remove this product?');

    if (result) {
      this.cartService.removeItem(product);
      this.updateCartItems();
    }
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
}

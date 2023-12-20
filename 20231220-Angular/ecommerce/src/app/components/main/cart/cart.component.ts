import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  mensajeAlerta: string = '';

  constructor(public carritoService: CartService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.cartItems = this.carritoService.getCart();
  }

  getTotal() {
    return this.carritoService.getTotal();
  }

  buy() {
    const result = confirm('¿Desea realizar esta compra?');

    if (result) {
      this.mensajeAlerta = 'Se realizó la compra correctamente!';

      setTimeout(() => {
        this.mensajeAlerta = '';
      }, 2000);

      this.carritoService.resetCart();
      this.list();
    }
  }

  delete(product: any) {
    const confirmacion = confirm('¿Desea eliminar este producto?');
    if (confirmacion) {
      this.carritoService.deleteProduct(product);
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

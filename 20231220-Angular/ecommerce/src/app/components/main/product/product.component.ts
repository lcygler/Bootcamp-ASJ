import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: any = {};
  productId: number = -1;
  message: string = '';

  constructor(
    public productService: ProductService,
    public cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.productId = parseInt(this.route.snapshot.params['id']);
    this.productId = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.productService.getProductById(this.productId).subscribe((res) => {
      this.product = res;
    });
  }

  add(): void {
    this.cartService.add(this.product);
    this.message = '¡Se agregó el producto al carrito!';

    setTimeout(() => {
      this.message = '';
    }, 2000);
  }

  changeImage(value: any): void {
    let imageUrl;

    if (value === 1) {
      // 1er miniatura seleccionada
      imageUrl = this.product.images[0];
      this.product.images[0] = this.product.images[1];
      this.product.images[1] = imageUrl;
    } else {
      // 2da miniatura seleccionada
      imageUrl = this.product.images[0];
      this.product.images[0] = this.product.images[2];
      this.product.images[2] = imageUrl;
    }
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
}

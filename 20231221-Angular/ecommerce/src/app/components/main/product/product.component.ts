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
  product: any = { images: [''] };
  productId: number | null = null;
  message: string | null = null;

  constructor(
    public productService: ProductService,
    public cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.productId = parseInt(this.route.snapshot.params['id']);
    this.productId = parseInt(this.route.snapshot.paramMap.get('productId')!);

    this.productService.getProductById(this.productId).subscribe((res) => {
      this.product = res;
    });
  }

  addToCart(): void {
    this.cartService.addItem(this.product);
    this.message = 'The product has been added to the cart! ✅';

    setTimeout(() => {
      this.message = '';
    }, 2000);
  }

  changeImage(value: any): void {
    let currentImage;

    if (value === 1) {
      // 1st image selected
      currentImage = this.product.images[0];
      this.product.images[0] = this.product.images[1];
      this.product.images[1] = currentImage;
    } else {
      // 2nd image selected
      currentImage = this.product.images[0];
      this.product.images[0] = this.product.images[2];
      this.product.images[2] = currentImage;
    }
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
}

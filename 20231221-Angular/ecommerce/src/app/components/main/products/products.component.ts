import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  productList: any[] = [];
  productName: string = '';
  productPrice: number = 0;
  minPrice: number = 0;
  maxPrice: number = 0;
  categoryId: number = 0;
  showAlert: boolean = false;

  ngOnInit(): void {
    this.getUrlParams();
  }

  getUrlParams() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.productName = paramMap.get('productName');
      this.productPrice = parseInt(paramMap.get('productPrice'));
      this.minPrice = parseInt(paramMap.get('minPrice'));
      this.maxPrice = parseInt(paramMap.get('maxPrice'));
      this.categoryId = parseInt(paramMap.get('categoryId'));
      console.log('minprice', this.minPrice);

      this.updateProducts();
    });
  }

  updateProducts() {
    this.productService
      .getFilteredProducts(
        this.productName,
        this.productPrice,
        this.minPrice,
        this.maxPrice,
        this.categoryId
      )
      .subscribe((res) => {
        this.productList = res;
        this.showAlert = true;
      });
  }

  navigateHome() {
    this.router.navigate(['']);
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
}

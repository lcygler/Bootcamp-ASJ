import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) {}

  productList: any[] = [];
  categoryId: number = -1;

  ngOnInit(): void {
    this.updateProducts();
  }

  updateProducts() {
    //  this.categoryId = parseInt(this.route.snapshot.params['id']);
    this.route.paramMap.subscribe((paramMap: any) => {
      this.categoryId = parseInt(paramMap.get('id'));

      if (this.categoryId) {
        // Listar productos por categoría
        this.productService
          .getProductsByCategory(this.categoryId)
          .subscribe((res) => {
            this.productList = res;
          });
      } else {
        // Listar todos los productos
        this.productService.getProducts().subscribe((res) => {
          this.productList = res;
        });
      }
    });
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }
}

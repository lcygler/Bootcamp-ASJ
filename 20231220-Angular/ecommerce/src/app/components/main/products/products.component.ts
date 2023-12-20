import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(
    public productoService: ProductService,
    public categoriaService: CategoryService,
    private route: ActivatedRoute
  ) {}

  products: any = [];
  categoryId: number = -1;

  ngOnInit(): void {
    this.list();
  }

  list() {
    //  this.categoryId = parseInt(this.route.snapshot.params['id']);
    this.route.paramMap.subscribe((paramMap: any) => {
      this.categoryId = parseInt(paramMap.get('id'));

      if (this.categoryId) {
        // Listar productos por categoría
        this.categoriaService
          .getProductsByCategory(this.categoryId)
          .subscribe((res) => {
            this.products = res;
          });
      } else {
        // Listar todos los productos
        this.productoService.getProducts().subscribe((res) => {
          this.products = res;
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

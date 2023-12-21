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
  categoryId: number = 0;
  productName: string = '';
  productPrice: number = 0;
  minPrice: number = 0;
  maxPrice: number = 0;

  ngOnInit(): void {
    this.getParamsValues();
  }

  getParamsValues() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.productName = paramMap.get('productName');
      this.productPrice = parseInt(paramMap.get('productPrice'));
      this.minPrice = parseInt(paramMap.get('minPrice'));
      this.maxPrice = parseInt(paramMap.get('maxPrice'));
      this.categoryId = parseInt(paramMap.get('categoryId'));

      console.log('productName', this.productName);
      console.log('productPrice', this.productPrice);
      console.log('minPrice', this.minPrice);
      console.log('maxPrice', this.maxPrice);
      console.log('categoryId', this.categoryId);

      this.updateProducts();
    });
  }

  updateProducts() {
    if (this.validParams()) {
      console.log('Productos filtrados');

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
          // console.log(this.productList);
        });
    } else {
      console.log('Todos los productos');

      this.productService.getProducts().subscribe((res) => {
        this.productList = res;
        // console.log(this.productList);
      });
    }
  }

  validParams() {
    const validName =
      this.productName && this.productName !== '' && this.productName !== 'all';

    const validPrice = this.productPrice && this.productPrice > 0;

    const validPriceRange =
      (this.minPrice || this.maxPrice) &&
      this.minPrice <= this.maxPrice &&
      (this.minPrice > 0 || this.maxPrice > 0);

    const validCategory = this.categoryId > 0;

    return validName || validPrice || validPriceRange || validCategory;
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;

    if (imgElement && imgElement.naturalWidth === 0) {
      imgElement.src = '../../../../../../assets/img/sadface.webp';
    }
  }

  /*
  applyFilters() {
    let filteredList;

    // Filter by price range
    filteredList = this.productList.filter((product) => {
      return (
        (this.minPrice === null || product.price >= this.minPrice) &&
        (this.maxPrice === null || product.price <= this.maxPrice)
      );
    });

    // Filter by search query
    if (this.searchQuery.trim() !== '') {
      const query = this.searchQuery.toLowerCase();

      filteredList = filteredList.filter((product) => {
        return (
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      });
    }

    this.productList = filteredList;
  }
  */
}

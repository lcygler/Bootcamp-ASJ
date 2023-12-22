import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  productName: string | null = null;
  productPrice: number | null = null;
  minPrice: number | null = null;
  maxPrice: number | null = null;

  categoryList: any = [];
  categoryId: number | null = null;
  categoryName: string = 'All Categories';

  constructor(
    public productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.productService.getCategories().subscribe((res) => {
      this.categoryList = res;
      this.getUrlParams();
    });
  }

  private getUrlParams(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.productName =
        paramMap.get('productName') !== 'all'
          ? paramMap.get('productName')
          : null;
      this.productPrice = parseInt(paramMap.get('productPrice')) || null;
      this.minPrice = parseInt(paramMap.get('minPrice')) || null;
      this.maxPrice = parseInt(paramMap.get('maxPrice')) || null;
      this.categoryId = parseInt(paramMap.get('categoryId')) || null;
      this.categoryName = this.getCategoryName(this.categoryId);
    });
  }

  private getCategoryName(categoryId: number | null): string {
    const category = this.categoryList.find((c: any) => c.id === categoryId);
    return category?.name || 'All Categories';
  }

  selectCategory(categoryId: any, categoryName: any): void {
    this.categoryId = parseInt(categoryId);
    this.categoryName = categoryName;
    this.applyFilters();
  }

  applyFilters(): void {
    const filters: any = {
      productName: this.productName?.trim() || 'all',
      price: this.productPrice || 0,
      minPrice: this.minPrice || 0,
      maxPrice: this.maxPrice || 0,
      categoryId: this.categoryId || 0,
    };

    const route = Object.values(filters).join('/');
    this.router.navigate([`/products/${route}`]);
  }

  clearFilters(): void {
    this.productName = null;
    this.productPrice = null;
    this.minPrice = null;
    this.maxPrice = null;

    this.categoryList = [];
    this.categoryId = null;
    this.categoryName = 'All Categories';

    this.router.navigate(['']);
    this.getCategories();
  }
}

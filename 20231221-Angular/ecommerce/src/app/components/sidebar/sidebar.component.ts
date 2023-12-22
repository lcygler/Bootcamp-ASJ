import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  productName: string | null = null;
  price: number | null = null;
  minPrice: number | null = null;
  maxPrice: number | null = null;

  categories: any = [];
  categoryId: number | null = null;
  categoryName: string | null = null;

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  selectCategory(categoryId: any, categoryName: any) {
    this.categoryId = parseInt(categoryId);
    this.categoryName = categoryName;
    this.applyFilters();
  }

  applyFilters() {
    if (this.minPrice && this.maxPrice && this.minPrice > this.maxPrice) {
      return;
    }

    const filters: any = {
      productName: this.productName?.trim() || 'all',
      price: this.price || 0,
      minPrice: this.minPrice || 0,
      maxPrice: this.maxPrice || 0,
      categoryId: this.categoryId || 0,
    };

    const route = Object.values(filters).join('/');
    this.router.navigate([`/products/${route}`]);
  }

  clearFilters() {
    this.productName = null;
    this.price = null;
    this.minPrice = null;
    this.maxPrice = null;

    this.categories = [];
    this.categoryId = null;
    this.categoryName = null;

    this.router.navigate(['']);
    this.getCategories();
  }
}

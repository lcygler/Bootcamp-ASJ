import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  minPrice: number = 0;
  maxPrice: number = 0;
  price: number = 0;
  productName: string = '';

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  filter() {
    // this.router.navigate([
    //   `/${this.productName}/${this.price}/${this.minPrice}/${this.maxPrice}`,
    // ]);

    if (this.productName === '') {
      this.router.navigate([
        `/all/${this.price}/${this.minPrice}/${this.maxPrice}`,
      ]);
    } else {
      this.router.navigate([
        `/${this.productName}/${this.price}/${this.minPrice}/${this.maxPrice}`,
      ]);
    }
  }
}

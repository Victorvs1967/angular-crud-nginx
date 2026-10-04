import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../../services/products';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.sass',
})
export class Home implements OnInit {

  products: Product[] = [];
  private productService = inject(ProductsService);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = [...data];
      });
  }

  deleteProduct(id: string) {
    this.productService
      .deleteProduct(id)
        .subscribe(() => {
          this.products = this.products.filter((product) => product.id != id);
        });
  }

}
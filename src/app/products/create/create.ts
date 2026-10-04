import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../../services/products';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.sass',
})
export class Create {

  productService = inject(ProductsService);
  router = inject(Router);

  newProductForm: Product = {
    id: '',
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
  };
  newProductId: string = '';

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      const maxId = Math.max(...products.map((product) => Number(product.id)), 100);
      const newId = maxId + 1;
      this.newProductForm.id = newId.toString();
    });
  }

  createProduct() {
    this.productService.createProduct(this.newProductForm)
      .subscribe({ 
        next: () => {
          this.router.navigate(['/products/home']);
        }, 
        error: (err) => {
            console.error('Error creating product:', err);
        }
      });
  }
}


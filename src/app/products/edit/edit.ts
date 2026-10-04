import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.sass',
})
export class Edit implements OnInit {
  newProductForm: Product = {
    id: '',
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
  };

  router = inject(Router);
  route = inject(ActivatedRoute);
  productService = inject(ProductsService);

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.getProductById(id);
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((data) => {
      this.newProductForm = data;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.newProductForm.id, this.newProductForm)
      .subscribe({
        next: () => {
          this.router.navigate(['/products/home']);
        },
        error: (err) => {
          console.error('Error updating product:', err);
        }
      });
  }
}
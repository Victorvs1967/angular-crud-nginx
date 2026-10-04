import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.url, product);
  }

  updateProduct(id: string, product: Product) {
    return this.http.put<Product>(`${this.url}/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

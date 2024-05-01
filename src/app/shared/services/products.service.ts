import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/products');
  }

  post(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload);
  }
}

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

  getAll = (): Observable<Product[]> => this.httpClient.get<Product[]>('/api/products');

  get = (id: string): Observable<Product> => this.httpClient.get<Product>(`/api/products/${id}`);

  post = (payload: ProductPayload) => this.httpClient.post('/api/products', payload);

  put = (id: string, payload: ProductPayload) => this.httpClient.put(`/api/products/${id}`, payload);

  delete = (id: string) => this.httpClient.delete(`/api/products/${id}`);
}

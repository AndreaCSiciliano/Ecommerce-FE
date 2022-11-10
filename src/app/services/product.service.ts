import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../app.api';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {  }

  getProducstByCategory(selectedCategory: Category): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/api/product/category/${selectedCategory}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${BASE_URL}/api/product/${id}`);
  }
}

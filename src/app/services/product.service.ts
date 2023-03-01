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
    var selCategory = '';
    switch(selectedCategory){
      case 0:
        selCategory = 'PC_DESKTOP';
        break;
      case 1:
        selCategory = 'LAPTOP';
        break;
      case 2:
        selCategory = 'TABLET';
        break;
      case 3:
        selCategory = 'HEADPHONES';
        break;
      case 4:
        selCategory = 'ACCESSORIES';
        break;
      default:
        selCategory = 'PC_DESKTOP';
        break;
    }
    return this.http.get<Product[]>(`${BASE_URL}/api/product/category/${selCategory}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${BASE_URL}/api/product/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../app.api';
import { ApiResponse } from '../models/api-response';
import { Order } from '../models/order';
import { ProductQuantity } from '../models/product-quantity';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _productQuantity: ProductQuantity[] = [];

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${BASE_URL}/api/order`, order);
  }

  public getProductsToCheckout() {
    return this._productQuantity
  }

  public setProductsToCheckout(ProductQuantityObj: any) {
    const productQuantityList: ProductQuantity[] = [];
    Object.keys(ProductQuantityObj).forEach(key => {
      const productQuantity = new ProductQuantity(key, ProductQuantityObj[key]);
      productQuantityList.push(productQuantity)
    });
    this._productQuantity = productQuantityList;
  }

  public getOrdersByUser(): Observable<ApiResponse<Order[]>> {
    return this.http.get<ApiResponse<Order[]>>(`${BASE_URL}/api/order/orders`);
  }

  public getOrderById(orderId: number): Observable<ApiResponse<Order>> {
    return this.http.get<ApiResponse<Order>>(`${BASE_URL}/api/order/${orderId}`)
  }
}

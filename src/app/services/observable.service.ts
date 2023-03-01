import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private category: Category = Category.PC_DESKTOP;
  private categorySubject$ = new BehaviorSubject<Category>(this.category);
  categoryChanged$ = this.categorySubject$.asObservable();

  private product!: Product;
  private cartProductsIds: string[] = sessionStorage.getItem('bagProducts') ? sessionStorage.getItem('bagProducts')!.split(',') : [];
  private productToCartSubject$ = new BehaviorSubject<Product>(this.product);

  productToCartChanged$ = this.productToCartSubject$.asObservable();

  private CartProductsSubject$ = new BehaviorSubject<string[]>(this.cartProductsIds);
  CartProductsChanged$ = this.CartProductsSubject$.asObservable();

  private isSidebarOpen: boolean = false;
  private isSidebarOpenSubject$ = new BehaviorSubject<boolean>(this.isSidebarOpen);
  isSidebarOpenChanged$ = this.isSidebarOpenSubject$.asObservable();

  constructor() { }

  public changeCategory(category: Category) {
    this.category = category;
    this.categorySubject$.next(category);
  }

  public addProductToCart(product: Product) {
    if(product) {
      this.cartProductsIds.push(product.id.toString());
      localStorage.setItem('bagProducts', this.cartProductsIds.toString());
    }
    this.product = product;
    this.CartProductsSubject$.next(this.cartProductsIds)
  }

  public removeProductFromCart(product: Product) {
    if(product) {
      const index = this.cartProductsIds.findIndex(id => id === product.id.toString());
      this.cartProductsIds.splice(index, 1);
      localStorage.setItem('bagProducts', this.cartProductsIds.toString());
    }
    this.CartProductsSubject$.next(this.cartProductsIds)
  }

  public cleanCart() {
    this.cartProductsIds = [];
    localStorage.removeItem('bagProducts');
    this.CartProductsSubject$.next(this.cartProductsIds)
  }

  public handleSidebarOpenClose(status: boolean) {
    this.isSidebarOpen = status;
    this.isSidebarOpenSubject$.next(status);
  }
}

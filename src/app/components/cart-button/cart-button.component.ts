import { Component, OnInit, Input } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  @Input() modifier?: string;
  @Input()
  selectedProduct!: Product;

  faShoppingBag = faShoppingBag;

  constructor(private observableService: ObservableService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.observableService.addProductToCart(this.selectedProduct);
  }

}

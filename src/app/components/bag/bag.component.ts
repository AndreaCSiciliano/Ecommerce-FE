import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  faShoppingBag = faShoppingBag;
  bagProducts: any[] = [];

  constructor(
    private observableService: ObservableService,
    private router: Router) { }

  ngOnInit(): void {
    this.observableService.CartProductsChanged$.subscribe(products => {
      this.bagProducts = products;
    });
  }

  navigateToCheckout() {
    this.router.navigate(['/cart']);
  }

}

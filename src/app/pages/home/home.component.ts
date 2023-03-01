import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';
import { ObservableService } from 'src/app/services/observable.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];
  public faExclamationCircle = faExclamationCircle;

  constructor(
    private productService: ProductService,
    private observableService: ObservableService,
    private router: Router) { }

  ngOnInit(): void {
    this.observableService.categoryChanged$.subscribe(category => {
      if(this.router.url !== '/') {
        this.router.navigateByUrl('/');
      }
      this.productService.getProducstByCategory(category).subscribe(prods => this.products = prods);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutProduct } from 'src/app/models/checkout-product';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public order: Order = new Order;
  public orderProducts: CheckoutProduct[] = [];

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrder();
  }

  public getOrder() {
    const orderId = this.activatedRoute.snapshot.params['id'];
    this.orderService.getOrderById(orderId).subscribe(result => {
      this.order = result.data;
      result.data.productsInOrder.forEach(prod => {
        this.productService.getProductById(Number(prod.productId)).subscribe(result => {
          const product: CheckoutProduct = new CheckoutProduct(
            result.id,
            result.name,
            result.description,
            result.image,
            result.price,
            prod.quantity
          );
          this.orderProducts.push(product);
        })
      })
    })
  }

  public goToProductDetail(productId: number) {
    this.router.navigate([`details/${productId}`])
  }
}

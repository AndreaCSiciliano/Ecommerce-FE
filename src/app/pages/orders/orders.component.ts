import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { faDotCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = [];
  public faDotCircle = faDotCircle;
  public faExclamationCircle = faExclamationCircle;

  constructor(
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders() {
    this.orderService.getOrdersByUser().subscribe(result => {
      this.orders = result.data;
    });
  }

  public goToDetails(orderId: any) {
    this.router.navigate([`orders/${orderId}`], orderId);
  }

  public goToProducts() {
    this.router.navigate(['/']);
  }

}

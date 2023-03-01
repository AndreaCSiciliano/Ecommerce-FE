import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle, faClipboardCheck, faClipboardList, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { OrderStatus } from 'src/app/models/order-status';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  public faClipboardList = faClipboardList;
  public faClipboardCheck = faClipboardCheck;
  public faCheckCircle = faCheckCircle;
  public faTruckMoving = faTruckMoving;
  public counts = [
    OrderStatus.PROCESSING,
    OrderStatus.APPROVED,
    OrderStatus.IN_TRANSIT,
    OrderStatus.DELIVERED
  ];

  @Input() currentStatus = 'PROCESSING';

  constructor() { }

  ngOnInit(): void {
  }

}

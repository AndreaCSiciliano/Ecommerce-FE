import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Output() onButtonClick = new EventEmitter<any>();
  @Input()
  show!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(event: any) {
    this.onButtonClick.emit(event);
  }
}

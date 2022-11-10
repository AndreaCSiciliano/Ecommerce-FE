import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { faCaretUp, faCaretDown, faCaretLeft, faCaretRight, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quantity-controller',
  templateUrl: './quantity-controller.component.html',
  styleUrls: ['./quantity-controller.component.css']
})
export class QuantityControllerComponent implements OnInit {

  @Input()
  showTrashIcon!: boolean;
  @Output() decreaseClick = new EventEmitter<any>();
  @Output() increaseClick = new EventEmitter<any>();

  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;
  faTrash = faTrash;
  innerWidth: any;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  onDecreaseClick(event: any) {
    this.decreaseClick.emit(event);
  }

  onIncreaseClick(event: any) {
    this.increaseClick.emit(event)
  }

}

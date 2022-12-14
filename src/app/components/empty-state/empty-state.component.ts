import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.css']
})
export class EmptyStateComponent implements OnInit {

  @Input()
  text!: string;
  @Input() subText?: string;
  @Input()
  show!: boolean;
  @Input() icon?: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  public faCheckCircle = faCheckCircle;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToOrders() {
    this.router.navigate(['/orders']);
  }

  public goToShopping() {
    this.router.navigate(['/']);
  }
}

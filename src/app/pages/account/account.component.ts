import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user!: User;

  constructor(
    private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.getUserInformation();
  }

  getUserInformation() {
    this.loginService.getUserByToken().subscribe(result => {
      this.user = result.data;
    })
  }

  logout() {
    this.loginService.logout();
  }

  goToEditInformation() {
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }
}

import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faBars = faBars;
  isOpen!: boolean;

  constructor(
    private loginService: LoginService,
    private observableService: ObservableService) { }

  ngOnInit(): void {
    this.observableService.isSidebarOpenChanged$.subscribe(status => {
      this.isOpen = status;
    });
  }

  handleOnIconClick() {
    this.observableService.handleSidebarOpenClose(true);
  }

  isUserLoggedIn() {
    return this.loginService.isUserLoggedIn();
  }

  handleOnMenuItemClick() {
    this.observableService.handleSidebarOpenClose(false);
  }
}

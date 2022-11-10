import { Component } from '@angular/core';
import { ObservableService } from './services/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private observableService: ObservableService) { }

  closeSidebar() {
    this.observableService.handleSidebarOpenClose(false);
  }
}

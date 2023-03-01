import { Component } from '@angular/core';
import { ObservableService } from './services/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private observableService: ObservableService) { }

  closeSidebar() {
    this.observableService.handleSidebarOpenClose(false);
  }
}

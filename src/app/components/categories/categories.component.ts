import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[] = [
    Category.PC_DESKTOP,
    Category.LAPTOP,
    Category.TABLET,
    Category.HEADPHONES,
    Category.ACCESSORIES
  ]

  constructor(private observableService: ObservableService) { }

  ngOnInit(): void {
  }

  handleClick(category: Category) {
    this.observableService.changeCategory(category);
  }
}

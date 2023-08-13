import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit{
  Categories: any[] = []; // Initialize Categories as an array

  constructor(private category: CategoryService) {} // Inject the service

  ngOnInit(): void {
    this.category.categories().subscribe(
      (data: any) => {
        this.Categories = data;
        console.log(this.Categories);
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}

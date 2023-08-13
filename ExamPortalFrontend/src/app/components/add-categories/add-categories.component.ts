import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit{
  category={
    title:'',
    description:'',
  };
  constructor(private _category:CategoryService){}
  ngOnInit(): void {}
  formSubmit(){
    debugger;
    if(this.category.title.trim()=='' || this.category.title==null){
      console.log("titile is empty");
      return;
    }
    this._category.addCategory(this.category).subscribe((data:any)=>{
      console.log('added successfully');
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
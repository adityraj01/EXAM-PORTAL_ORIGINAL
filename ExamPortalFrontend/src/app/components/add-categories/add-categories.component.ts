import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
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
  constructor(private _category:CategoryService,private snackBar: MatSnackBar){}
  ngOnInit(): void {}
  formSubmit(){
    debugger;
    if(this.category.title.trim()=='' || this.category.title==null){
      this.snackBar.open('Title Required !!', '', {
        duration: 3000,
      });
      return;
    }
    this._category.addCategory(this.category).subscribe((data:any)=>{
      this.category.title = '';
      this.category.description = '';
      Swal.fire('Success !!','Category added successfully','success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Server Error !!','error');
      }
    );
  }
}
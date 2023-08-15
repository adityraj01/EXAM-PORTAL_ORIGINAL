import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../service/quiz.service';

interface Category {
  cid: number;
  title: string;
  // other properties if available
}

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{
  categories: Category[] = [];

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:'',
    },
  }
  constructor( private _cat: CategoryService, private _snack:MatSnackBar, private _quiz:QuizService){}
  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any)=>{
        //categories load
        this.categories = data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Server Error !!','error');
      }
    );
  }
  addQuiz(){
    if(this.quizData.title.trim() == '' || this.quizData.title == null){
      this._snack.open('Title Required !!','',{
        duration:3000,
      });
      return; 
    }
    this._quiz.addQuiz(this.quizData).subscribe((data:any)=>{
        Swal.fire('Success','quiz is added', 'success')
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:true,
          category:{
            cid:'',
          },
        };
      },
      (error:any)=>{
        Swal.fire('error','Error while adding quiz','error');
        console.log(error)

      }
    )
  }

  

}

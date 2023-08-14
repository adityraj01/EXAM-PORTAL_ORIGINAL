import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{
  quizzes = [
    {
      qId:23,
      title:'Basic Java Quiz',
      description:'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      maxMarks:'50',
      numberOfQuestions:'20',
      active:'',
      category:{
        title:'Programming'
      }
    },
    {
      qId:23,
      title:'Basic Java Quiz',
      description:'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      maxMarks:'50',
      numberOfQuestions:'20',
      active:'',
      category:{
        title:'Programming'
      }
    }
  ]

  constructor(private _quiz:QuizService){}
  ngOnInit(): void {
    debugger
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Server Error !!','error');
      }
      );
     
  }

}

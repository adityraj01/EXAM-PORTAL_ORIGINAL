import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

interface Quiz {
  qid:number;
  title: string;
  category: {
    title: string;
  };
  description: string;
  maxMarks: number;
  numberOfQuestions: number;
  // other properties...
}

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{
  quizzes: Quiz[] = [];

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
  
    deleteQuiz(qId: number) {
      debugger;
      console.log(qId);
      this._quiz.deleteQuiz(qId)
        .subscribe((data) => {
          Swal.fire('Success', 'Quiz deleted', 'success');
        },(error)=>{
          Swal.fire('Error', 'Error in deleting', 'error');
        });
    }
    
  }

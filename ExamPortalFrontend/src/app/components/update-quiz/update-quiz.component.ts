import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

interface Category {
  cid: number;
  title: string;
  // other properties if available
}

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{
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
  categories: Category[] = [];
  constructor(private _route: ActivatedRoute, private _quiz:QuizService, private _cat: CategoryService) {}
  qId = 0 ;
  quiz: any;
  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    // alert(this.qId);
    this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz = data;
        console.log(this.quiz);      
      },
      (error)=>{
        console.log(error);
      } 
    );
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

  public updateData(){
    this._quiz.updateQuiz(this._quiz).subscribe((data)=>{
      Swal.fire("Success !!",'quiz updated','success');
    },(error)=>{
      Swal.fire("Error !!",'error in updatig quiz','error'); 
      console.log(error);
    }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/service/questions.service';

interface question_interface {
  content:number;
  option1:string;
  option2:string;
  option3:string;
  option4:string;
  answer:string
}

@Component({
  selector: 'app-viw-quiz-questions',
  templateUrl: './viw-quiz-questions.component.html',
  styleUrls: ['./viw-quiz-questions.component.css']
})
export class ViwQuizQuestionsComponent implements OnInit{
  qId:any;
  qTitle:any;
  questionsList : question_interface[] =[];

  constructor(private _route:ActivatedRoute, private _question:QuestionsService){}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      console.log(data);
      this.questionsList = data;
    },
    (error)=>{
      console.log(error);
    }
    )
    console.log(this.qId);
    console.log(this.qTitle);
  }

}

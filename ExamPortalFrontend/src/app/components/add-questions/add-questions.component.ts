import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{
  qId:any;
  qTitle:any;
  question = {
    quiz:{
      qId:'',
      qTitle:'',
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  };
  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['qTitle'];
    console.log(this.qTitle);
    this.question.quiz['qId'] =  this.qId;
    this.question.quiz['qTitle'] =  this.qTitle;
  }

}

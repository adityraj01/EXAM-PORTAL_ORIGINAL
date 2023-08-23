import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  baseUrl = `http://localhost:8080`;
  constructor(private _http:HttpClient) { }

  public getQuestionsOfQuiz(qid:any){
    return this._http.get(`${this.baseUrl}/question/quiz/all/${qid}`);
  }

  public addQuestion(question : any){
    debugger;
    console.log(question);
    return this._http.post(`${this.baseUrl}/question/`,question);
  }

  public deleteQuestion(questionId:any){
    return this._http.delete(`${this.baseUrl}/question/${questionId}`);
  }
}

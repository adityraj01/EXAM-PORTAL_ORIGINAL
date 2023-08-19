import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = `http://localhost:8080`;
  constructor(private _http:HttpClient){}

  public quizzes(){
    return this._http.get(`${this.baseUrl}/quiz/`);
  }

  //add quiz
  public addQuiz(quiz: any): Observable<any>{
    return this._http.post(`${this.baseUrl}/quiz/`, quiz);
  }

  //delete quiz
  public deleteQuiz(qId : any){
    debugger;
    console.log(qId);
    return this._http.delete(`${this.baseUrl}/quiz/${qId}`);
  }

  //get the single quiz
  public getQuiz(qId : any){
    debugger;
    return this._http.get(`${this.baseUrl}/quiz/${qId}`);
  }

  //updateQuiz
  public updateQuiz(quiz : any){
    debugger;
    return this._http.put(`${this.baseUrl}/quiz/`, quiz);
  }

}

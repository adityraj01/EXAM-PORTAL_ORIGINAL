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

  public addQuiz(quiz: any): Observable<any>{
    return this._http.post(`${this.baseUrl}/quiz/`, quiz);
  }
}

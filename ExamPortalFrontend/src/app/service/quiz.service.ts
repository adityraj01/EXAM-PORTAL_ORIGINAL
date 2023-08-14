import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = `http://localhost:8080`;
  constructor(private _http:HttpClient){}
  public quizzes(){
    return this._http.get(`${this.baseUrl}/quiz/`);
  }
}

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
}

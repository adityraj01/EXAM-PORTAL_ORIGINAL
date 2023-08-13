import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = `http://localhost:8080`;
  constructor(private _http:HttpClient) { }

  //load all the categories
  public categories(){
    return this._http.get(`${this.baseUrl}/category/`);
  }
  public addCategory(category:any){
    debugger;
    console.log(category);
    return this._http.post(`${this.baseUrl}/category/`,category);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = "http://localhost:8080/api/v2";


  constructor(private httpClient:HttpClient) { }

  getStudentList(): Observable<Student[]>{
    console.log(this.httpClient.get<Student[]>(`${this.baseURL}`) );
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student:Student):Observable<Object>{
    console.log(student);
    return this.httpClient.post<Student[]>(`${this.baseURL}`,student);
  }

  generateToken(userCredentials:any){
    return this.httpClient.post(`${this.baseURL}/token`,userCredentials);

  }

  saveStudents(username: any) {
    debugger;
    return this.httpClient.get(`${this.baseURL}/login/${username}`);
  }

  // loginUser(token)
  // {
  //   localStorage.setItem("token",token);
  //   return true;
  // }

  // isLoggedIn()
  // {
  //   let localStorage.getItem
  // }

  
}

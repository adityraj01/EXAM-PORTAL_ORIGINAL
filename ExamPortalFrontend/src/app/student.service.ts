import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = "http://localhost:8080/api/v2/students";

  constructor(private httpClient:HttpClient) { }

  getStudentList(): Observable<Student[]>{
    console.log(this.httpClient.get<Student[]>(`${this.baseURL}`) );
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student:Student):Observable<Object>{
    console.log(student);
    return this.httpClient.post<Student[]>(`${this.baseURL}`,student);
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  students!:Student[];

  constructor(private studentService: StudentService, private router: Router){}
  ngOnInit(): void {
    this.getStudents(); 
  }
  private getStudents() {
    this.studentService.getStudentList().subscribe(data=>{
      this.students = data;
    })
  }
  updateStudents(id:number){
    this.router.navigate(['update-student',id]);
  }

}

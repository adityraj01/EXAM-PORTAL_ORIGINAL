import { Component, OnInit } from '@angular/core';
import { Student } from 'src/model/student';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private studentService:StudentService,private router:Router) { }
  student:Student = new Student();
  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe(data  =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }

}

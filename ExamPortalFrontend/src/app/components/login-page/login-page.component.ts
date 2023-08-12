import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  isSubmitted = false;
  loginForm!:FormGroup;

  userCredentials={
    username:'',
    password:''
  }

  constructor(private formBuilder:FormBuilder,private studentSer:StudentService,private router:Router){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',Validators.required]
    })
  }

  get fc(){
    return this.loginForm.controls; 
    //this.loginForm.controls['email'].value ~ this.fc['email'].value}
  }
  
  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      console.log("ERROR");
      return;
    }

    if(this.userCredentials.password!=null && this.userCredentials.username!=null){
      var userName = `${this.fc['username'].value}`;
      var password = `${this.fc['password'].value}`;
      console.log(userName,password);
      this.studentSer.loginStudents(userName).subscribe(
        (response)=>{
          const studentDetails = response;
    
          // Store student details in localStorage
          localStorage.setItem('studentDetails', JSON.stringify(studentDetails));
          
          console.log(studentDetails)
          this.router.navigate(['/dashboard']);
        },
        Error=>{
          console.log(Error);
        }

      )

    }
    else{
      console.log("Fields are empty");
    }

    
  }
}

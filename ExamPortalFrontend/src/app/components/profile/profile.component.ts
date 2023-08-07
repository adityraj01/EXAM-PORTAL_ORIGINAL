import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  studentDetails: any;
  constructor() { }
  ngOnInit(): void {
    const studentDetailsString = localStorage.getItem('studentDetails');

    if (studentDetailsString !== null) {
      this.studentDetails = JSON.parse(studentDetailsString);
      console.log(this.studentDetails);
    } else {
      console.log('Student details not found in localStorage.');
    }

    console.log(this.studentDetails);
  }

}

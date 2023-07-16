import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentsComponent } from './update-students/update-students.component';

const routes: Routes = [
  {path:'students',component:StudentListComponent},
  {path:'create-students',component:CreateStudentComponent},
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path: 'update-student/:id', component: UpdateStudentsComponent}
  // {path: 'employee-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

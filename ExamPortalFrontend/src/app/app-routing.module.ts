import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { UpdateStudentsComponent } from './components/update-students/update-students.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { AddCategoriesComponent } from './components/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './components/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './components/update-quiz/update-quiz.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'create-students', component: CreateStudentComponent },
  // {path:'',redirectTo:'students',pathMatch:'full'},
  { path: 'update-student/:id', component: UpdateStudentsComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', component: HomeComponent },
  { path: 'dashboard', 
    component: DashboardComponent,
    children:[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      {
        path:'add-categories',
        component:AddCategoriesComponent
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

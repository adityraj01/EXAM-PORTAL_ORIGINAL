import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStudentsComponent } from './components/update-students/update-students.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DefaultButtonComponent } from './partials/default-button/default-button.component';
import { HomeComponent } from './components/home/home.component';import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { MatDividerModule } from '@angular/material/divider';
import { AddCategoriesComponent } from './components/add-categories/add-categories.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentsComponent,
    HeaderComponent,
    SearchComponent,
    LoginPageComponent,
    DefaultButtonComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

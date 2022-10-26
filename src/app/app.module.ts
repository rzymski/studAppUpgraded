import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { PrintStudentComponent } from './print-student/print-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { PrintDirectiveDirective } from './print-directive.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    PrintStudentComponent,
    EditStudentComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    PrintDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { StudentClass } from '../classes/student';
import { WhichType } from '../edit-student/edit-student.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:StudentClass[]=[];
  constructor() { }

  ngOnInit() {
    console.log("Students");
    this.students.push(new StudentClass("Piotr", "XD", 1500));
    this.students.push(new StudentClass("Ala", "MaKota", 100));
    this.students.push(new StudentClass("Grzegorz", "Brzeczyszczykiewicz", 9000));
    this.students.push(new StudentClass("zxczxvz", "sdfsdf", 9675670));
  }

  doEditStudentData(editedStudent:WhichType){
    console.log(editedStudent);
    if(editedStudent.student.Name.length > 0 && editedStudent.student.Surname.length > 0 && typeof editedStudent.student.IndexNumber == "number")
    {
      let unique:boolean=true;
      for(let i:number=0; i<this.students.length; i++)
      {
        if(this.students[i].IndexNumber == editedStudent.student.IndexNumber && i != editedStudent.which)
        {
          unique = false;
          break;
        }
      }
      if(unique)
        this.students[editedStudent.which] = editedStudent.student;
    }
  }

}

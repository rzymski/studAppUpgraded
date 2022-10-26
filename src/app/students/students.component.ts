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
  addButtonWasClicked:boolean=false;
  deleteButtonWasClicked:boolean=false;
  constructor() { }

  ngOnInit() {
    console.log("Students");
    this.students.push(new StudentClass("Piotr", "XD", 1500));
    this.students.push(new StudentClass("Ala", "MaKota", 100));
    this.students.push(new StudentClass("Grzegorz", "Brzeczyszczykiewicz", 9000));
    this.students.push(new StudentClass("zxczxvz", "sdfsdf", 9675670));
  }

  validationStudentData(student:StudentClass, indexInList:number):boolean {
    if(student.Name.length > 0 && student.Surname.length > 0 && typeof student.IndexNumber == "number" && student.IndexNumber >= 0)
    {
      for(let i:number=0; i<this.students.length; i++)
      {
        if(this.students[i].IndexNumber == student.IndexNumber && i != indexInList)
          return false;
      }
      return true;
    }
    return false;
  }

  doEditStudentData(editedStudent:WhichType){
    console.log(editedStudent);
    if(this.validationStudentData(editedStudent.student, editedStudent.which))
      this.students[editedStudent.which] = editedStudent.student;
  }

  addButtonClicked(): void{
    this.addButtonWasClicked=true;
  }

  addStudentoperationEnd(studentData:StudentClass):void{
    console.log(studentData);
    this.addButtonWasClicked=false;
    if(studentData.IndexNumber != 0 && this.validationStudentData(studentData, -1))
      this.students.push(studentData);
  }

  deleteButtonClicked(): void{
    this.deleteButtonWasClicked=true;
  }

  deleteStudentOperationEnd(deleteOrNot:number):void{
    this.deleteButtonWasClicked=false;
    if(deleteOrNot != -1)
    {
      this.students.splice(deleteOrNot, 1);
      console.log("Usunieto: ", deleteOrNot);
    }
  }
}

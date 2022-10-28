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
    let s1:StudentClass = new StudentClass("Piotr", "XD", 1500);
    s1.addSubject("Matematyka");
    s1.setMarksToSubject("Matematyka", [4.5, 3.5, 5]);
    s1.addSubject("Polski");
    s1.setMarksToSubject("Polski", [1,2,3]);
    s1.addSubject("W-f");
    s1.setMarksToSubject("W-f", [4,5,4.5, 5, 5, 5, 4.5]);

    let s2:StudentClass = new StudentClass("Ala", "MaKota", 100);
    s2.addSubject("Chemia");
    s2.setMarksToSubject("Chemia", [2, 3, 2.5, 2]);
    s2.addSubject("Angielski");
    s2.setMarksToSubject("Angielski", [4, 4.5, 5, 4]);
    s2.addSubject("Fizyka");
    s2.setMarksToSubject("Fizyka", [2]);
    let s3:StudentClass = new StudentClass("Grzegorz", "Brzeczyszczykiewicz", 9000);
    s3.addSubject("Matematyka");
    s3.setMarksToSubject("Matematyka", [5, 4.5, 4, 5]);
    let s4:StudentClass = new StudentClass("Juliusz", "Cezar", 9675670);
    s4.addSubject("Matematyka");
    s4.setMarksToSubject("Matematyka", [5, 2, 3, 4]);
    s4.addSubject("Polski");
    s4.setMarksToSubject("Polski", [2, 2, 2]);
    s4.addSubject("W-f");
    s4.setMarksToSubject("W-f", [4,5,3.5, 5, 4, 4, 3.5]);
    s4.addSubject("Chemia");
    s4.setMarksToSubject("Chemia", [4, 3, 4.5, 2]);
    s4.addSubject("Angielski");
    s4.setMarksToSubject("Angielski", [2, 2.5, 2, 2]);
    s4.addSubject("Fizyka");
    s4.setMarksToSubject("Fizyka", [5]);
    let s5:StudentClass = new StudentClass("Ga", "Ga", 40000000)
    s5.addSubject("Filozofia");
    s5.setMarksToSubject("Filozofia", [1, 0, 0])
    this.students.push(s1);
    this.students.push(s2);
    this.students.push(s3);
    this.students.push(s4);
    this.students.push(s5);
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

  calculateAvgGradeOFAll(): number
  {
    let sumMarksValue:number=0;
    let numberOfMarks:number=0;
    for(let i:number=0; i<this.students.length; i++)
    {
      for(let j:number=0; j<this.students[i].getAllMarks().length; j++)
      {
        sumMarksValue += this.students[i].getAllMarks()[j];
        numberOfMarks++;
      }
    }
    let avg:number = sumMarksValue/numberOfMarks;
    console.log("Srednia wszystkich ocen", avg);
    return avg;
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentClass } from '../classes/student';

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Output() operationEnd: EventEmitter<StudentClass>=new EventEmitter();
  studentForAdd:StudentClass=new StudentClass("","",0);


  constructor() { }

  ngOnInit(): void {
  }

  add():void {
    console.log(this.studentForAdd);
    this.operationEnd.emit(this.studentForAdd);
  }

  cancel():void{
    this.studentForAdd.IndexNumber=0;
    this.operationEnd.emit(this.studentForAdd);
  }
}

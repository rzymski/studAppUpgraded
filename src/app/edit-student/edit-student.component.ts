import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentClass } from '../classes/student';

export type WhichType={
  student:StudentClass,
  which:number
}

@Component({
  selector: 'edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Input() studentData!:StudentClass;
  @Input() which!:number;
  clicked:number=-1;
  studentForEdit!:StudentClass;
  x:number=12214;
  @Output() doEditInParent: EventEmitter<WhichType>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  studentClicked(): void {
    this.clicked=this.which;
    this.studentForEdit = StudentClass.copy(this.studentData);
  }

  save():void {
    this.clicked=-1;
    let tempStudent:WhichType = {student:this.studentForEdit, which:this.which};
    this.doEditInParent.emit(tempStudent);
  }

  hide():void{
    this.clicked=-1;
  }

}

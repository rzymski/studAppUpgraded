import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  //@Output() operationEnd: EventEmitter<StudentClass>=new EventEmitter();
  @Input() which:number=-1;
  @Output() operationEnd: EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteStudent():void{
    console.log("Wykonano delete", this.which);
    this.operationEnd.emit(this.which);
  }

  cancel():void{
    console.log("Wykonano cancel", -1);
    this.operationEnd.emit(-1);
  }
}

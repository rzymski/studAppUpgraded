import { Component, OnInit, Input } from '@angular/core';
import { StudentClass } from '../classes/student';

@Component({
  selector: 'print-student',
  templateUrl: './print-student.component.html',
  styleUrls: ['./print-student.component.css']
})
export class PrintStudentComponent implements OnInit {
  @Input() studentForPrint!:StudentClass;
  @Input() isOdd!:boolean;
  @Input() prefix!: String;


  constructor() { }

  ngOnInit() {
  }
}

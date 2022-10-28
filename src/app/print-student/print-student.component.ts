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
  @Input() avgOfAllMarks!:number;


  constructor() { }

  ngOnInit() {
  }


  printDetailedDataBool:boolean=false;

  printDetailedData(){
    this.studentForPrint.calculateAverage();
    console.log("Średnia = ", this.studentForPrint.averageGrade);

    this.printDetailedDataBool=true;
    console.log(this.studentForPrint);
  }

  hideDetailedData(){
    this.printDetailedDataBool=false;
    this.printSchoolarshipBool=false;
  }

  printSchoolarshipBool:boolean=false;
  scholarshipValue:number=0;
  printSchoolarship(){
    this.printSchoolarshipBool=true;
    if(this.studentForPrint.averageGrade > this.avgOfAllMarks)
      this.scholarshipValue = this.studentForPrint.averageGrade*100;
  }
}

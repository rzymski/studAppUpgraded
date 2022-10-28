import { SubjectClass } from "./subject";

export class StudentClass{
  subjectsWithMarks:SubjectClass[];
  averageGrade:number;
  constructor(private name:string, private surname:string, private indexNumber:number){
    this.subjectsWithMarks = [];
    this.averageGrade = 0;
  }
  //constructor(private name:string, private surname:string, private indexNumber:number){}

  get Name():string{
    return this.name;
  }

  get Surname():string{
    return this.surname;
  }

  get IndexNumber():number{
    return this.indexNumber;
  }

  set Name(nameOfStudent:string){
    this.name = nameOfStudent;
  }

  set Surname(surnameOfStudent:string){
    this.surname = surnameOfStudent;
  }

  set IndexNumber(indexNumberOfStudent:number){
    this.indexNumber = indexNumberOfStudent;
  }

  public static copy(student:StudentClass):StudentClass
  {
     let newStudent:StudentClass = new StudentClass(student.Name,student.Surname,student.IndexNumber);
     return newStudent;
    //return new StudentClass(student.Name,student.Surname,student.IndexNumber);
  }

  addSubject(subject:string):void{
    let s:SubjectClass = new SubjectClass(subject, []);
    this.subjectsWithMarks.push(s);
  }

  addMarkToSubject(subject:string, mark:number):void{
    for(let i:number=0; i<this.subjectsWithMarks.length; i++)
    {
      if(this.subjectsWithMarks[i].Name == subject)
      this.subjectsWithMarks[i].addMark(mark);
    }
  }

  setMarksToSubject(subject:string, marks:number[]):void{
    for(let i:number=0; i<this.subjectsWithMarks.length; i++)
    {
      if(this.subjectsWithMarks[i].Name == subject)
      this.subjectsWithMarks[i].Marks = marks;
    }
  }

  getMarksOfSubject(subject:string):number[]{
    for(let i:number=0; i<this.subjectsWithMarks.length; i++)
    {
      if(this.subjectsWithMarks[i].Name == subject)
        return this.subjectsWithMarks[i].Marks;
    }
    return [];
  }

  getAllSubjects():SubjectClass[]{
    return this.subjectsWithMarks;
  }

  getAllMarks():number[]{
    let allMarks:number[] = [];
    for(let i:number=0; i<this.subjectsWithMarks.length; i++)
    {
      for(let j:number=0; j<this.subjectsWithMarks[i].Marks.length; j++)
      {
        allMarks.push(this.subjectsWithMarks[i].Marks[j]);
      }

    }
    return allMarks;
  }

  calculateAverage():void{
    let sumMarksValue:number=0;
    let numberOfMarks:number=0;
    for(let i:number=0; i<this.subjectsWithMarks.length; i++)
    {
      for(let j:number=0; j<this.subjectsWithMarks[i].Marks.length; j++)
      {
        //console.log(this.subjectsWithMarks[i].Marks[j]);
        sumMarksValue += this.subjectsWithMarks[i].Marks[j];
        numberOfMarks++;
      }
    }
    this.averageGrade = sumMarksValue/numberOfMarks;
  }

}

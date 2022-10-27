export class SubjectClass{
  constructor(private name:string, private marks:number[]){}

  get Name():string{
    return this.name;
  }

  set Name(nameOfSubject:string){
    this.name = nameOfSubject;
  }

  get Marks():number[]{
    return this.marks;
  }

  set Marks(marks:number[]){
    this.marks=marks;
  }

  addMark(mark:number):void{
    this.marks.push(mark);
  }

  copyMarks():number[]{
    let tempMarks:number[] = []
    for(let i:number=0; i<this.marks.length; i++)
    {
        tempMarks.push(this.marks[i]);
    }
    return tempMarks
  }

  public static copy(subject:SubjectClass):SubjectClass
  {
     let newSubject:SubjectClass = new SubjectClass(subject.Name,subject.copyMarks());
     return newSubject;
  }
}

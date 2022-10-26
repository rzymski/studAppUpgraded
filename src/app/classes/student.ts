export class StudentClass{
  constructor(private name:string, private surname:string, private indexNumber:number){}

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
}

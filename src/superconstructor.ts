export class Person {
  name: string;

  constructor(name:string) {
    this.name = name;
  }
}

export class Employee extends Person {
  department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
}
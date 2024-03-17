export class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class Manager extends Employee {}

export class Director extends Employee {}
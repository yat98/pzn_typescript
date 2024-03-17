export class Employee {
	constructor(public name: string) {}
}

export class Manager extends Employee {}

export class VicePresident extends Manager {}
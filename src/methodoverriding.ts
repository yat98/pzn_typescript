export class Employee{
	name: string;
	
	constructor(name: string){
		this.name = name;
	}
	
	sayHello(name: string): string{
		return `Hello ${name}, my name is ${this.name}`;
	}
}

export class Manager extends Employee{
	sayHello(name: string): string{
		return `Hello ${name}, my name is ${this.name}. I am your manager`;
	}
}
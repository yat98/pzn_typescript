import { Employee, Manager } from "../src/methodoverriding";

describe('Method Overriding', () => {
  it('should support', () => {
    const employee: Employee = new Employee('Budi');
    expect(employee.sayHello('asep')).toBe('Hello asep, my name is Budi');

    const manager: Manager = new Manager('Yat');
    expect(manager.sayHello('asep')).toBe('Hello asep, my name is Yat. I am your manager');
  });
});
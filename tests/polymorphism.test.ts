import { Employee, Manager, VicePresident } from "../src/polymorhpism";

describe('Polymorhpism', () => {
  it('should support', () => {
    let employee: Employee = new Employee('Yat');
    expect(employee).toBeInstanceOf(Employee);

    employee = new Manager('Eko');
    expect(employee).toBeInstanceOf(Employee);

    employee = new VicePresident('Ari');
    expect(employee).toBeInstanceOf(Employee);

    function sayHello(employee: Employee): string {
      return `Hello, ${employee.name}`;
    }

    employee = new Employee('Yat');
    expect(sayHello(employee)).toBe('Hello, Yat');

    employee = new Manager('Eko');
    expect(sayHello(employee)).toBe('Hello, Eko');

    employee = new VicePresident('Ari');
    expect(sayHello(employee)).toBe('Hello, Ari');
  });
});
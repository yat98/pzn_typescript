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
      if(employee instanceof VicePresident){
        const vp = employee as VicePresident;
        return `Hello vice president, ${vp.name}`;
      }else if(employee instanceof Manager){
        const manager = employee as Manager;
        return `Hello manager, ${manager.name}`;
      }else{
        return `Hello employee, ${employee.name}`;
      }
    }

    employee = new Employee('Yat');
    expect(sayHello(employee)).toBe('Hello employee, Yat');

    employee = new Manager('Eko');
    expect(sayHello(employee)).toBe('Hello manager, Eko');

    employee = new VicePresident('Ari');
    expect(sayHello(employee)).toBe('Hello vice president, Ari');
  });
});
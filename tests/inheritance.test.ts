import { Director, Employee, Manager } from "../src/inheritance";

describe('Inheritance', () => {
  it('should support', () => {
    const employee: Employee = new Employee('Yat');
    expect(employee.name).toBe('Yat');
    expect(employee).toBeInstanceOf(Employee);


    const manager: Manager = new Manager('Eko');
    expect(manager.name).toBe('Eko');
    expect(manager).toBeInstanceOf(Employee);
    expect(manager).toBeInstanceOf(Manager);

    const director: Director = new Director('Asep');
    expect(director.name).toBe('Asep');
    expect(director).toBeInstanceOf(Employee);
    expect(director).toBeInstanceOf(Director);
  });
});
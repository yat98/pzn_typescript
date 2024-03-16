import { Employee, Manager } from "../src/methodoverriding";

describe('Method Overriding', () => {
  it('should support', () => {
    const employee: Employee = new Employee('Budi');
    const infoSpy = jest.spyOn(global.console, 'info');

    employee.sayHello('asep');
    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledTimes(1);
    expect(infoSpy).toHaveBeenCalledWith('Hello asep, my name is Budi');
    jest.clearAllMocks();
    
    const manager: Manager = new Manager('Yat');
    manager.sayHello('asep');
    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledTimes(2);
    expect(infoSpy).toHaveBeenLastCalledWith('I am your manager');
  });
});
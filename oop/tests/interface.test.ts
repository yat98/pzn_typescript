import { Person } from "../src/interface";

describe('Interface', () => {
  it('should support inheritance', () => {
    const person: Person = new Person('Yat');
    expect(person).toHaveProperty('name');

    const infoSpy = jest.spyOn(global.console, 'info');
    person.sayHello('andi')
    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledTimes(1);
    expect(infoSpy).toHaveBeenCalledWith('Hello andi, my name is Yat');
  });
});
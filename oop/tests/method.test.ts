import { Customer } from "../src/properties";

describe('Method', () => {
  it('should can have method', () => {
    const customer: Customer = new Customer(1);
    const infoSpy = jest.spyOn(global.console, 'info');

    customer.age = 30;
    customer.sayHello('budi');

    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledTimes(1);
    expect(infoSpy).toHaveBeenCalledWith('Hello budi, my name is Guest');

    jest.clearAllMocks();
  });
});
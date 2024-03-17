import { Customer } from './../src/customer';
import { Order } from './../src/order';

describe('Class', () => {
  it('should create class', () => {
    const customer: Customer = new Customer();
    const order: Order = new Order();

    expect(customer).toBeInstanceOf(Customer);
    expect(order).toBeInstanceOf(Order);
  });

  it('should create constructor', () => {
    const infoSpy = jest.spyOn(global.console, 'info');
    new Customer();

    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledTimes(1);
    expect(infoSpy).toHaveBeenCalledWith('Create new customer');

    jest.clearAllMocks();
  });
});
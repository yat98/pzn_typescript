import { Customer } from './../src/properties';

describe('Properties', () => {
  it('should can have properties', () => {
    const customer: Customer = new Customer(1);
    customer.age = 30;

    expect(customer.id).toBe(1);
    expect(customer.name).toBe('Guest');
    expect(customer.age).toBe(30);
  });
});
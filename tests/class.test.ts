describe('Class', () => {
  it('should create class', () => {
    class Customer {};

    class Order {};

    const customer: Customer = new Customer();
    const order: Order = new Order();

    expect(customer).toBeInstanceOf(Customer);
    expect(order).toBeInstanceOf(Order);
  });
});
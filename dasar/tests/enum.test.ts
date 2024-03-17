import { Customer, CustomerType } from "../src/enum";

describe('Enum', () => {
  it('should support in typescript', () => {
    const customer: Customer = {
      id: 1,
      name: 'Hidayat',
      type: CustomerType.GOLD
    };

    expect(customer.type).toBe(CustomerType.GOLD);
  });
});
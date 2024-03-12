import { Seller } from "../src/interface";

describe('Interface', () => {
  it('should support in typescript', () => {
    const seller: Seller = {
      id: 1,
      name: 'Hidayat',
      nib: '12123123',
      npwp: '123123123'
    };

    // Error
    // seller.nib = '3213123';

    expect(seller).toHaveProperty('id');
    expect(seller).toHaveProperty('name');
    expect(seller).toHaveProperty('nib');
    expect(seller).toHaveProperty('npwp');
  });
});
import { Category, Product } from "../src/alias";

describe('Alias', () => {
  it('should support type alias', () => {
    const category: Category = {
      id: 100,
      name: 'Phone'
    };

    const product: Product = {
      id: '7t13zA',
      name: 'Poco F4',
      price: 4500000,
      category,
    };

    // Error
    // product.description = 'Lorem ipsum sit dolor';

    expect(category).toHaveProperty('id');
    expect(category).toHaveProperty('name');

    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('category');
  });
});
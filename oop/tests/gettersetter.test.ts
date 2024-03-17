import { Category } from "../src/category";

describe('Getter & Setter', () => {
  it('should support in class', () => {
    const category: Category = new Category();

    expect(category.name).toBe('empty');
    category.name = 'Shoes';
    expect(category.name).toBe('Shoes');
    category.name = "";
    expect(category.name).toBe('Shoes');
  });
});
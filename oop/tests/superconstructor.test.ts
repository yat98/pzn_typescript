import { Employee } from "../src/superconstructor";

describe('Super Constructor', () => {
  it('should support', () => {
    const employee: Employee = new Employee('Yat', 'IT');

    expect(employee.name).toBe('Yat');
    expect(employee.department).toBe('IT');
  });
});
import { Person } from "../src/parameterproperties";

describe('Parameter Properties', () => {
  it('should support', () => {
    const person: Person = new Person('Yat');
    expect(person.name).toBe('Yat');
  });
});
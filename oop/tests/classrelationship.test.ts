describe('Class Relationship', () => {
  it('should support', () => {
    class Person {
      constructor(public name: string) {
      }
    }
    
    class Customer {
      constructor(public name: string) {
      }
    }
    
    const person: Person = new Customer('Yat');
    expect(person).toBeInstanceOf(Customer);
  });
});
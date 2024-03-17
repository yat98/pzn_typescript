describe('Abstract', () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;
    
    constructor(id: number){
      this.id = id;
    }
    
    abstract sayHello(name: string): string;
  }

  class RegularCustomer extends Customer {
    name: string;

    constructor(id: number, name: string) {
      super(id);
      this.name = name
    }

    sayHello(name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
    }
  }

  it('should support', () => {
    const regularCustomer: RegularCustomer = new RegularCustomer(1, 'Yat');
    expect(regularCustomer.id).toBe(1);
    expect(regularCustomer.name).toBe('Yat');
    expect(regularCustomer.sayHello('andi')).toBe('Hello andi, my name is Yat');
  });
});
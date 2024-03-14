describe('Function', () => {
  it('should support in typescript', () => {
    function sayHello(name: string): string {
      return `Hello, ${name}`;
    }

    expect(sayHello('andi')).toBe('Hello, andi');

    function printHello(name: string): void {
      console.info(`Hello, ${name}`);
    }

    const infoSpy = jest.spyOn(global.console, 'info');
    printHello('andi');
    expect(infoSpy).toHaveBeenCalled();
    expect(infoSpy).toHaveBeenCalledWith('Hello, andi');
  });

  it('should support default value', () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello, ${name}`;
    }

    expect(sayHello('andi')).toBe('Hello, andi');
    expect(sayHello()).toBe('Hello, Guest');
  });

  it('should support rest parameter', () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1,2,3,4,5)).toBe(15);
  });

  it('should support optional parameter', () => {
    function sayHello(firstName: string, lastName?: string): string {
      if(lastName){
        return `Hello, ${firstName} ${lastName}`;
      }
      return `Hello, ${firstName}`;
    }

    expect(sayHello('Hidayat')).toBe('Hello, Hidayat');
    expect(sayHello('Hidayat', 'Chandra')).toBe('Hello, Hidayat Chandra');

  });
});
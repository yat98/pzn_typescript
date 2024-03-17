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

  it('should support function overloading', () => {
    function callMe(name: string): string;

    function callMe(name: number): number;

    function callMe(value: any): any {
      if(typeof value=== 'string') {
        return value.toUpperCase();
      }else if(typeof value === 'number') {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(typeof callMe(10)).toBe('number');

    expect(callMe('hello')).toBe('HELLO');
    expect(typeof callMe('hello')).toBe('string');
  });

  it('should support function as parameter', () => {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello, ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('hidayat',toUpper)).toBe('Hello, HIDAYAT');

    expect(sayHello('hidayat', function(name:string): string {
      return name.toUpperCase();
    })).toBe('Hello, HIDAYAT');

    expect(sayHello('hidayat', (name:string): string => name.toUpperCase())).toBe('Hello, HIDAYAT');
  });
});
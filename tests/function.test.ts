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
});
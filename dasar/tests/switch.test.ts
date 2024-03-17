describe('Switch Statement', () => {
  it('should support switch statement', () => {
    function sayHello(name: string): string {
      switch(name) {
        case 'eko':
          return 'Hi, eko';
          break;
        case 'budi':
          return 'Hi, budi';
          break;
        default: 
          return 'Hello';
      }
    }
    expect(sayHello('eko')).toBe('Hi, eko');
    expect(sayHello('budi')).toBe('Hi, budi');
    expect(sayHello('hidayat')).toBe('Hello');
  });
});
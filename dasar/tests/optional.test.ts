describe('Optional Parameter', () => {
  it('should support null and undefined', () => {
    function sayHello(name?: String | null) {
      if(name) {
        return `Hello, ${name}`;
      }else{
        return `Hello`;
      }
    }

    expect(sayHello('Hidayat')).toBe('Hello, Hidayat');
    expect(sayHello(undefined)).toBe('Hello');
    expect(sayHello(null)).toBe('Hello');
  });
});
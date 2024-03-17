describe('Generic', () => {
  class GenericData<T> {
    value: T;
    
    constructor(value: T) {
      this.value = value;
    }
  }

  it('should can only accept one type', () => {
    const genericData = new GenericData<number>(123);
    // Error
    // genericData.value = 'Eko';
    expect(typeof genericData.value).toBe('number');

    const genericDataString = new GenericData<string>('Eko');
    expect(typeof genericDataString.value.toUpperCase()).toBe('string');
  });
});
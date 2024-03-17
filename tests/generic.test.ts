describe('Generic Class', () => {
  class GenericData<T> {
    value: T;
    
    constructor(value: T) {
      this.value = value;
    }

    get(): T
    {
      return this.value;
    }

    set(value: T): void {
      this.value = value;
    }
  }

  it('should can only accept one type', () => {
    const genericData = new GenericData<number>(123);
    // Error
    // genericData.value = 'Eko';
    expect(typeof genericData.value).toBe('number');
    expect(typeof genericData.get()).toBe('number');
    genericData.set(321)
    expect(typeof genericData.get()).toBe('number');

    const genericDataString = new GenericData<string>('Eko');
    expect(typeof genericDataString.value.toUpperCase()).toBe('string');
    expect(typeof genericDataString.get()).toBe('string');
    genericDataString.set('Yat');
    expect(typeof genericDataString.get()).toBe('string');
  });
});

describe('Generic Function', () => {
  function create<T>(value: T): T{
    return value;
  }

  it('should support function generic', () => {
    const result = create<string>('Yat');
    expect(typeof result).toBe('string');

    const result2 = create<number>(2);
    expect(typeof result2).toBe('number');
  });
});
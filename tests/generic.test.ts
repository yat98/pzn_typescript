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

describe('Multiple Generic Type', () => {
  class Entry<K,V>{
    constructor(public key: K, public value: V) {}
  }
  
  class Triple<K,V,T>{
    constructor(public first: K, public second: V, public third: T) {}
  }

  class SimpleGeneric<T = string> {
    private value?: T;
    
    setValue(value: T) {
      this.value = value;
    }
    
    getValue(): T | undefined {
      return this.value;
    }
  }

  it('should support', () => {
    const entry = new Entry<number, string>(1, 'Yat');
    expect(typeof entry.key).toBe('number');
    expect(typeof entry.value).toBe('string');

    const triple = new Triple<number, string, boolean>(1, 'Yat', true);
    expect(typeof triple.first).toBe('number');
    expect(typeof triple.second).toBe('string');
    expect(typeof triple.third).toBe('boolean');
  });

  it('should support optional generic type', () => {
    const entry = new Entry(1, 'Yat');
    // Error
    // entry.key = '1';
    // entry.value = 123;
    expect(typeof entry.key).toBe('number');
    expect(typeof entry.value).toBe('string');
  });

  it('should create simple generic', () => {
    const simpleGeneric = new SimpleGeneric();
    simpleGeneric.setValue('yat');
    // simpleGeneric.setValue(100);
    // simpleGeneric.setValue(true);
  });
});

describe('Constraint', () => {
  interface Employee {
    id: string;
    name: string;
  }
  
  interface Manager extends Employee {
    totalEmployee: number;
  }
  
  interface VP extends Manager {
    totalEmployee: number;
  }
  
  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }

  it('should support constraint', () => {
    const data1 = new EmployeeData<Employee>({
      id: "1",
      name: "Yat"
    });

    const data2 = new EmployeeData<Manager>({
      id: "2",
      name: "Eko",
      totalEmployee: 20
    });

    expect(data1).toBeInstanceOf(EmployeeData);
    expect(data2).toBeInstanceOf(EmployeeData);

    // Error
    // const data3 = new EmployeeData<string>('Yat');
  });
});
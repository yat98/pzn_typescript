import { Seller } from "../src/interface";

describe('Interface', () => {
  it('should support in typescript', () => {
    const seller: Seller = {
      id: 1,
      name: 'Hidayat',
      nib: '12123123',
      npwp: '123123123'
    };

    // Error
    // seller.nib = '3213123';

    expect(seller).toHaveProperty('id');
    expect(seller).toHaveProperty('name');
    expect(seller).toHaveProperty('nib');
    expect(seller).toHaveProperty('npwp');
  });

  it('should support function interface', () => {
    interface AddFunction {
      (value1: number, value2: number): number
    }

    const add: AddFunction = (value1: number, value2: number): number => value1 + value2;

    expect(add(2,2)).toBe(4);
    expect(add(2,3)).toBe(5);
  });

  it('should support indexable interface', () => {
    interface StringArray {
      [index: number]: string
    }
    
    const names: StringArray = ['Hidayat', 'Chandra'];

    Object.keys(names).map(Number)
      .forEach(index => {
        expect(typeof index).toBe('number')
      });

    Object.values(names).forEach(index => {
      expect(typeof index).toBe('string')
    });
  });

  it('should support indexable interface for non number index', () => {
    interface StringDictionary {
      [key: string]: string
    } 

    const dictionary: StringDictionary = {
      'name': 'Hidayat',
      'address': 'Indonesia',
    }

    expect(Object.keys(dictionary)[0]).toBe('name');
    expect(Object.values(dictionary)[0]).toBe('Hidayat');

    expect(Object.keys(dictionary)[1]).toBe('address');
    expect(Object.values(dictionary)[1]).toBe('Indonesia');
  });
});
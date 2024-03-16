describe('Static', () => {
  class Configuration {
    static NAME: string = 'Belajar TypeScript';
    static VERSION: number = 1.0;
    static AUTHOR: string = 'Hidayat';
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for(let value of values) {
        total += value;
      }
      
      return total;
    }
  }
  
  it('should support', () => {
    expect(Configuration.NAME).toBe('Belajar TypeScript');
    expect(Configuration.VERSION).toBe(1.0);
    expect(Configuration.AUTHOR).toBe('Hidayat');

    expect(MathUtil.sum(1,2,3,4,5)).toBe(15);
  });
});
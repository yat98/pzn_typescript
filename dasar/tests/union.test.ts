describe('Union', () => {
  it('should support in typescript', () => {
      let sample: String | Number = 100;

      expect(sample).toBe(100);

      sample = 'Lorem ipsum';

      expect(sample).toBe('Lorem ipsum');

      // Error
      // sample = [];
  });

  it('should support typeof operator', () => {
    function process(value: Number | String | Boolean) {
      if(typeof value === 'string') {
        return value.toUpperCase();
      }else if(typeof value === 'number') {
        return value + 2;
      }else {
        return !value;
      }
    }

    expect(process('hi')).toBe('HI');
    expect(process(100)).toBe(102);
    expect(process(false)).toBe(true);
  });
});
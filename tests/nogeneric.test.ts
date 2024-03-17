describe('No Generic', () => {
  class Data{
    value: any;

    constructor(value: any) {
      this.value = value;
    }
  }
  it('should accept all value', () => {
    const data = new Data('Eko');
    data.value = 100;

    expect(data.value).toBe(100);
  });
});
describe('Erorr Handling', () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }
  
  async function doubleIt(value: number): Promise<number> {
    if(value < 0) throw new ValidationError('Value cannot be less than 0');
    return value * 2;
  }

  it('should support', () => {
    expect(doubleIt(-1)).rejects.toThrow(ValidationError);
  });
});
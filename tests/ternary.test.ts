describe('Ternary Operator', () => {
  it('should support ternary operator', () => {
    const value = 80;
    const say = value >= 75 ? 'Congratulation' : 'Try Again';

    expect(say).toBe('Congratulation');
  });
});
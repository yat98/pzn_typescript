import { MathUtil } from "../src/namespace";

describe('Namespace', () => {
  it('should support', () => {
    expect(MathUtil.PI).toBe(3.14);
    expect(MathUtil.sum(1,2,3,4,5)).toBe(15);
  });
});
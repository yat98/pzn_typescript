import { Counter, DoubleCounter } from "../src/visibility";

describe('Visibility', () => {
  it('should support', () => {
    const counter: Counter = new Counter();
    counter.increment();
    expect(counter.getCounter()).toBe(1);

    const doubleCounter: DoubleCounter = new DoubleCounter();
    doubleCounter.increment();
    expect(doubleCounter.getCounter()).toBe(2);
  });
});
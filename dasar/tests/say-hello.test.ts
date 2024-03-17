import { sayHello } from "../src/say-hello";

describe('sayHello', () => {
  it('should return hello hidayat', () => {
    expect(sayHello('hidayat')).toBe('Hello, hidayat')
  });
});
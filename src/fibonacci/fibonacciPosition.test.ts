import fibonacciPosition from './fibonacciPosition';

describe('fibonacciPosition', () => {
  it('returns the fibonacci position', () => {
    expect(fibonacciPosition(0)).toBe(0);
    expect(fibonacciPosition(1)).toBe(1);
    expect(fibonacciPosition(2)).toBe(1);
    expect(fibonacciPosition(3)).toBe(2);
    expect(fibonacciPosition(4)).toBe(3);
    expect(fibonacciPosition(5)).toBe(5);
    expect(fibonacciPosition(6)).toBe(8);
    expect(fibonacciPosition(7)).toBe(13);
    expect(fibonacciPosition(8)).toBe(21);
  })
})

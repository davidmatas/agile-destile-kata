import takeNumber from './takeNumber';

describe('takeNumber', () => {
  it('should throw is numbers is not between 1 and 100', () => {
    expect(() => takeNumber(-1)).toThrowError('Number should not be less than 1');
    expect(() => takeNumber(101)).toThrowError('Number should not be higher than 100');
  });

  it('it should return the number as string', () => {
    expect(takeNumber(2)).toBe('2');
  });

  it('it should return Fizz for multiplo of 3', () => {
    expect(takeNumber(3)).toBe('Fizz');
    expect(takeNumber(6)).toBe('Fizz');
    expect(takeNumber(9)).toBe('Fizz');
    expect(takeNumber(12)).toBe('Fizz');
    expect(takeNumber(2)).not.toBe('Fizz');
  });

  it('it should return Buzz for multiplo of 5', () => {
    expect(takeNumber(5)).toBe('Buzz');
    expect(takeNumber(10)).toBe('Buzz');
    expect(takeNumber(20)).toBe('Buzz');
    expect(takeNumber(25)).toBe('Buzz');
  });

  it('it should return FizzBuzz for multiplo of 3 and 5', () => {
    expect(takeNumber(15)).toBe('FizzBuzz');
    expect(takeNumber(30)).toBe('FizzBuzz');
  });
})

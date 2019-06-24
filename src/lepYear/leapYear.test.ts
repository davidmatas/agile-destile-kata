import leapYear from "./leapYear";

describe('leapYear', () => {
  it('should detect regular years', () => {
    expect(leapYear(2001)).toBe(false);
  });

  it('should detect leap years', () => {
    expect(leapYear(1996)).toBe(true);
  });

  it('should detect atypical leap years', () => {
    expect(leapYear(1900)).toBe(false);
  });

  it('should detect atypical leap years', () => {
    expect(leapYear(2000)).toBe(true);
  });
})

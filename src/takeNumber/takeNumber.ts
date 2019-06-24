export default (number: number) => {
  if(number < 1) throw new Error('Number should not be less than 1');
  if(number > 100) throw new Error('Number should not be higher than 100');

  let multipleOf5 = number % 5 === 0;
  let multipleOf3 = number % 3 === 0;

  if(multipleOf3 && multipleOf5) return 'FizzBuzz';
  if(multipleOf3) return 'Fizz';
  if(multipleOf5) return 'Buzz';

  return String(number);
};

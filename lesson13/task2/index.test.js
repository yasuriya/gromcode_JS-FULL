import getSum, { getSquaredNumbers, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result = getSquaredNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
});

it('should get numbers sum', () => {
  const result = getSum(8, 4);
  expect(result).toEqual(12);
});

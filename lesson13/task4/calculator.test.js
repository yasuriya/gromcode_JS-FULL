import { calc } from './calculator.js';

it('should return sum of numbers', () => {
  const result = calc('2 + 3');
  expect(result).toEqual('2 + 3 = 5');
});

it('should return result of substraction of numbers', () => {
  const result = calc('7 - 3');
  expect(result).toEqual('7 - 3 = 4');
});

it('should return result of multiplication of numbers', () => {
  const result = calc('2 * 3');
  expect(result).toEqual('2 * 3 = 6');
});

it('should return result of division of numbers', () => {
  const result = calc('9 / 2');
  expect(result).toEqual('9 / 2 = 4.5');
});

it('should return null', () => {
  const result = calc(10);
  expect(result).toEqual(null);
});

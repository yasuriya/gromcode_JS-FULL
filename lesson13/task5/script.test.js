import { reverseArray, withdraw, getAdults } from './script.js';

it('should return null', () => {
  const result = reverseArray('2 + 3');
  expect(result).toEqual(null);
});

it('should return null', () => {
  const result = reverseArray(1);
  expect(result).toEqual(null);
});

it('should return reversed array', () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});

it('should return -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('should return correct balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 20);
  expect(result).toEqual(67);
});
it('should return correct balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100);
  expect(result).toEqual(1300);
});

it('should return empty object', () => {
  const result = getAdults({ 'John Doe': 10, Tom: 17, Bob: 13 });
  expect(result).toEqual({});
});

it('should return empty object', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
it('should return only adults', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

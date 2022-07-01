import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should return null', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should return null', () => {
  const result = getMinSquaredNumber('string');
  expect(result).toEqual(null);
});

it('should return minimal squared number', () => {
  const result = getMinSquaredNumber([-6, -22, -3, 4]);
  expect(result).toEqual(9);
});

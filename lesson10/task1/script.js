const array = [12, null, 31.3, true, 3.5, false, NaN, undefined, 1.23, 44, Infinity, 'gogo'];

const getFiniteNumbers = arr => {
  return arr.filter(el => Number.isFinite(el));
};

console.log(getFiniteNumbers(array));

const getFiniteNumbersV2 = arr => {
  return arr.filter(el => isFinite(el));
};

console.log(getFiniteNumbersV2(array));

const getNaN = arr => {
  return arr.filter(el => Number.isNaN(el));
};
console.log(getNaN(array));

const getNaNV2 = arr => {
  return arr.filter(el => isNaN(el));
};

console.log(getNaNV2(array));
console.log(array);

const getIntegers = arr => {
  return arr.filter(el => Number.isInteger(el));
};
console.log(getIntegers(array));

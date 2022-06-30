/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

const array = [11, 2.8, -30, true, 78, '23ds', undefined, 4.1334, -2.5, 'gogo'];

const getParsedIntegers = arr => {
  return arr.map(el => Number.parseInt(el));
};
console.log(getParsedIntegers(array));

const getParsedIntegersV2 = arr => {
  return arr.map(el => parseInt(el));
};
console.log(getParsedIntegersV2(array));

const getParsedFloats = arr => {
  return arr.map(el => Number.parseFloat(el));
};
console.log(getParsedFloats(array));

const getParsedFloatsV2 = arr => {
  return arr.map(el => parseFloat(el));
};
console.log(getParsedFloatsV2(array));

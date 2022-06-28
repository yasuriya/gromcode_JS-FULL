const array = [1, 2, 3, 4, 5];

const squareArray = arr => (!Array.isArray(arr) ? null : arr.map(el => el * el));

console.log(squareArray(array));
console.log(squareArray('array'));

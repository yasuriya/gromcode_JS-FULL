const array = [1, 2, 3, 4, 5];

const reverseArray = arr => (!Array.isArray(arr) ? null : [...arr].reverse());

console.log(reverseArray(array));
console.log(reverseArray('array'));

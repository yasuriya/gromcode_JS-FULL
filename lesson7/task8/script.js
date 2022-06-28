const array = [1, 2, 3, 4, 5];

const cloneArr = arr => (!Array.isArray(arr) ? null : arr.slice());
const cloneArr2 = arr => (!Array.isArray(arr) ? null : [...arr]);

console.log(cloneArr(array));
console.log(cloneArr2(array));
console.log(cloneArr('array'));

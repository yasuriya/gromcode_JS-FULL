const array = [1, 2, 3, 4, 5];

const increaseEvenEl = (arr, delta) =>
  !Array.isArray(arr) ? null : arr.filter(el => el % 2 === 0).map(el => el + delta);

console.log(increaseEvenEl(array, 3));
console.log(increaseEvenEl('array'));

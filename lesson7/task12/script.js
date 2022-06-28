const arrAverage = arr =>
  !Array.isArray(arr) ? null : arr.reduce((acc, el) => acc + el) / arr.length;

console.log(arrAverage([1, 2, 3, 4, 5]));

const sum = arr => (!Array.isArray(arr) ? null : arr.reduce((acc, el) => acc + el));

console.log(sum([1, 2, 3, 4, 5]));

const getMaxAbsoluteNumber = arr =>
  Array.isArray(arr) && arr.length > 0 ? Math.max(...arr.map(el => Math.abs(el))) : null;

// examples
console.log(getMaxAbsoluteNumber([]));
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6]));
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1]));
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));

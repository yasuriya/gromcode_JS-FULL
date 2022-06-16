function squareArray(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let el of arr) {
    el *= el;
    result.push(el);
  }
  return result;
}

console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]

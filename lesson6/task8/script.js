const increaseEvenEl = (arr, delta) => {
  let resultArray = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let el of arr) {
    if (el % 2 === 0) {
      el += delta;
      resultArray.push(el);
    } else {
      resultArray.push(el);
    }
  }
  return resultArray;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []

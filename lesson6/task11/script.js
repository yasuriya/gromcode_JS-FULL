function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let sum = max + min;
  if (sum > 1000) {
    return true;
  } else {
    return false;
  }
}
console.log(checker([1, 2, 3, 4, 5]));

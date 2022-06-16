function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let clonedArray = [...arr];
  return clonedArray;
}

console.log(cloneArr([1, 2, 3, 4]));

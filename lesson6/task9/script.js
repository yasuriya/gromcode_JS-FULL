function reverseArray(arr) {
  let resultArray = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    resultArray.push(arr[i]);
  }
  return resultArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

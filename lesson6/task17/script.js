function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let uniqueArray = [];
  for (let el of array) {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  }
  return uniqueArray.length;
}

console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));

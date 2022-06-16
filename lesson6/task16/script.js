function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let resultArray = [];
  for (let el of array) {
    if (!resultArray.includes(el)) {
      resultArray.push(el);
    }
  }
  return resultArray;
}

console.log(removeDuplicates([1, 2, 3, 3, 4]));

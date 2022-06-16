function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let sortedArrayAsc = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    sortedArrayAsc.push(array[i]);
  }
  return sortedArrayAsc;
}

console.log(sortAsc([3, 5, 2, 7]));

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let sortedArrayDesc = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    sortedArrayDesc.push(array[i]);
  }
  return sortedArrayDesc;
}
console.log(sortDesc([3, 5, 2, 7]));

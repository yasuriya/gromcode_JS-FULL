const getSubArray = (arr, numberOfElements) => {
  let result = [];
  for (let i = 0; i < numberOfElements; i++) {
    result.push(arr[i]);
  }
  return result;
};

console.log(getSubArray([1, 2, 3, 4, 5], 3));

export const createArrayOfFunctions = arrLength => {
  const arr = [];

  if (arrLength === undefined) {
    return arr;
  } else if (typeof arrLength !== 'number') {
    return null;
  }

  for (let i = 0; i < arrLength; i++) {
    arr[i] = () => i;
  }
  return arr;
};

console.log(createArrayOfFunctions(true));
console.log(createArrayOfFunctions(100)[77]());

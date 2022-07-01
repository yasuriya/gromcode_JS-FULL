// input: array
// output: number

// check if input is array (statement)
// transform all elements in array to absolute numbers - Math.abs()
// find minimal integer in array
// square minimal integer

export default numbersArr => {
  if (!Array.isArray(numbersArr) || numbersArr.length === 0) {
    return null;
  }
  const absoluteNumbers = numbersArr.map(el => Math.abs(el));
  return Math.min(...absoluteNumbers) ** 2;
};

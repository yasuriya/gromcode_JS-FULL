function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}
console.log(swap([1, 10, 9, 11]));

function swapManual(numbers) {
  let result = [...numbers];
  const firstElement = result.shift();
  result.push(firstElement);
  return result;
}

console.log(swapManual([1, 10, 9, 11]));

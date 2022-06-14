function getSum(firstNumber, lastNumber) {
  let sum = 0;
  for (let i = firstNumber; i <= lastNumber; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

getSum(2, 8);

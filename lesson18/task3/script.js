'use strict';

// ? input: number
// ? output: number

function sumOfSquares() {
  return [...arguments].reduce((acc, curr) => {
    return acc + curr ** 2;
  }, 0);
}

console.log(sumOfSquares(1, 2, 3));

function showArg() {
  console.log(this);
  //   console.log([...arguments]);
}

showArg();

const showArg2 = () => {
  console.log(this);
  //   console.log([...arguments]);
};

showArg2();

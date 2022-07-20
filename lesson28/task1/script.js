// ? input: number
// ? output: object

//! 1. create object
//! 2. create result variable
//! 3. write methods for object

const calc = value => {
  let data = value;

  const calculator = {
    add(value) {
      data += value;
      return this;
    },
    subtract(value) {
      data -= value;
      return this;
    },
    mult(value) {
      data *= value;
      return this;
    },
    div(value) {
      data /= value;
      return this;
    },
    result() {
      return data;
    },
  };
  return calculator;
};

console.log(calc(5).add(5).div(2).mult(10).subtract(70).result());

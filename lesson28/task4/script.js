const double = x => x * 2;
const square = x => x ** 2;
const half = x => x / 2;

const compose =
  (...funcs) =>
  x => {
    return funcs.reduce((acc, fn) => {
      return fn(acc);
    }, x);
  };

const multiFn = compose(double, square, half);
console.log(multiFn(2));

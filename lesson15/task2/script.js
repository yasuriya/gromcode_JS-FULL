const createCalculator = () => {
  let data = 0;

  function add(num) {
    data += num;
  }

  function decrease(num) {
    data -= num;
  }

  function reset() {
    data = 0;
  }

  function getMemo() {
    return data;
  }

  return { add, decrease, reset, getMemo };
};

const calc1 = createCalculator();
const calc2 = createCalculator();

console.log(calc1.add(5));
console.log(calc1.getMemo());

console.log(calc2.decrease(3));
console.log(calc2.getMemo());

const makeCounter = () => {
  let data = 0;

  return function () {
    return data++;
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

console.log(counter1());
console.log(counter1());

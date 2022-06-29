/* eslint-disable no-restricted-syntax */

const pickProps = (obj, props) => {
  const result = {};

  for (let key in obj) {
    if (props.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }

console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']));

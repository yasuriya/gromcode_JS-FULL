/* eslint-disable no-restricted-syntax */

const getAdults = obj => {
  const result = {};

  for (let key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }

  return result;
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({ 'John Doe': 117, Tom: 17, Bob: 28 }));

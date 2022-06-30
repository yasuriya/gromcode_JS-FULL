// input: string
// output: string

// check the input is string
// transform string to array
// use reverse method
// transform array to string
// remove all commas

const reverseString = str =>
  typeof str === 'string' ? str.split('').reverse().toString().replaceAll(',', '') : null;

console.log(reverseString(1));

// if (typeof str === 'string') {
//     return str.split('').reverse().toString().replaceAll(',', '');
//   } else {
//     return null;
//   }

const asyncNum1 = Promise.resolve(52);
const asyncNum2 = Promise.resolve('23');
const asyncNum3 = Promise.resolve(undefined);
const asyncNum4 = Promise.reject(new Error(`Can't calculate`));

const getSum = numberArray =>
  numberArray.filter(el => !isNaN(el)).reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...args) => Promise.all(args).then(numbers => getSum(numbers));

asyncSum(asyncNum1, asyncNum2, asyncNum3, asyncNum4)
  .then(value => console.log(value))
  .catch(error => console.log(error));

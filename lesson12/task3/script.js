// input: array
// output: array

// remove array elements which contain letters with filter method
// transform elements to numbers to use .toFixed() method
// correct an expression with template string

const arr = ['2.8 ', '      34.33', ' 1 dollar'];

const cleanTransactionsList = transactionsArr =>
  transactionsArr.filter(el => Number(el)).map(el => `$${Number(el).toFixed(2)}`);

console.log(cleanTransactionsList(arr));

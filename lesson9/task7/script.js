const getTotalRevenue = transactions =>
  transactions.map(el => el.amount).reduce((prev, curr) => prev + curr);

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);

const int = 213;
console.log(Number.isNaN(int));
console.log(isNaN(NaN));

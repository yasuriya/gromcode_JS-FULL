const wallet = {
  transactions: [11, 55, 742, 213, 76788],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

const walletTwo = {
  transactions: [1233, 3213, 12312312313],
};

console.log(wallet.getMax());
console.log(wallet.getMax.apply(walletTwo));

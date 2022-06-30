const getTotalPrice = arr => {
  const sumPrices = arr.reduce((prev, curr) => prev + curr);
  return '$' + Math.floor(sumPrices * 100) / 100;
};

console.log(getTotalPrice([12.334, 52.111, 99.79992]));
// .map(el => Math.floor(el * 100) / 100);

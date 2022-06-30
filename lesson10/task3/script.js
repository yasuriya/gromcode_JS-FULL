const multiRound = num => {
  return [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    +num.toFixed(2),
  ];
};
console.log(multiRound(11.72556));
console.log(multiRound(6.162));
console.log(multiRound('6.162'));

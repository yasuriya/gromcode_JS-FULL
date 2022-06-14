function getPrimes(num) {
  for (let i = 2; i <= num; ++i) {
    let counter = 0;
    for (let x = 2; x <= num; x++) {
      if (i >= x && i % x === 0) {
        counter++;
      }
    }
    if (counter === 1) {
      console.log(i);
    }
  }
}
getPrimes(100);

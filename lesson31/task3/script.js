const successPromise = new Promise(resolve => {
  resolve(32);
});

successPromise
  .then(number => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then(number => {
    const squaredNumber = number * number;
    return squaredNumber;
  })
  .then(result => {
    console.log(result); // 256
  });

successPromise
  .then(number => {
    const multiTen = number * 10;
    return multiTen;
  })
  .then(result => {
    console.log(result); // 320
  });

// const getRandomNumbers = (length, from, to) => {
//   const arr = [];
//   if (!to - from >= 1) {
//     return null;
//   }
//   for (let i = 0; i < length; i++) {
//     arr.push(Math.ceil(Math.random() * Math.floor(to - from) + from));
//   }
//   return arr;
// };

const getRandomNumbers = (length, from, to) => {
  const arr = [];

  if (to - from >= 1) {
    for (let i = 0; i < length; i++) {
      arr.push(Math.ceil(Math.random() * Math.floor(to - from) + from));
    }
  } else {
    return null;
  }
  return arr;
};
console.log(getRandomNumbers(5, 1.4, 3.22));

function sum(from, to) {
  let sumResult = 0;
  for (let i = from; i <= to; i++) {
    sumResult += i;
  }
  return sumResult;
}
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) {
    return true;
  } else {
    return false;
  }
}

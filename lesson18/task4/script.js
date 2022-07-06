'use strict';

// ? input: function
// ? output: function

function saveFuncCalls(func) {
  function memoryFunc(...args) {
    memoryFunc.callsHistory.push(args);
    return func.call(this, ...args);
  }
  memoryFunc.callsHistory = [];
  return memoryFunc;
}

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}
function mult(firstNum, secondNum) {
  return firstNum * secondNum;
}
const sumWithMemory = saveFuncCalls(sum);
// console.log(sumWithMemory(4, 2)); // ===> 6
// console.log(sumWithMemory(9, 1)); // ===> 10
sumWithMemory(4, 2);
sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]
// console.log(sumWithMemory.callsHistory);
sumWithMemory(77, 22);
console.log(sumWithMemory.callsHistory);

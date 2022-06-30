/* eslint-disable prefer-object-spread */

function mergeObjectsV1(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

function mergeObjectsV2(obj1, obj2) {
  return Object.assign({}, obj2, obj1);
}

function mergeObjectsV3(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function mergeObjectsV4(obj1, obj2) {
  return { ...obj2, ...obj1 };
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

console.log(mergeObjectsV1(obj1, obj2));
console.log(mergeObjectsV2(obj1, obj2));
console.log(mergeObjectsV3(obj1, obj2));
console.log(mergeObjectsV4(obj1, obj2));

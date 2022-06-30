/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  const obj = { id: userId };
  return Object.assign(userData, obj);
}

function addPropertyV3(userData, userId) {
  const obj = { id: userId };
  return Object.assign({}, userData, obj);
}

function addPropertyV4(userData, userId) {
  const obj = { ...userData };
  obj.id = userId;
  return obj;
}

const user = {
  name: 'Sam',
};

console.log(addPropertyV1(user, '12321334567'));
console.log(addPropertyV2(user, '1234512367'));
console.log(addPropertyV3(user, '1231231234567'));
console.log(addPropertyV4(user, '123123124567'));

const users = {
  John: 23,
  Ann: 16,
  Rick: 44,
  Patty: 15,
  Steve: 30,
};

const copyObj = obj => Object.assign({}, obj);

console.log(copyObj(users));

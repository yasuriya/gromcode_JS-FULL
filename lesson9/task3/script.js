const users = {
  John: 23,
  Ann: 16,
  Rick: 44,
  Patty: 15,
  Steve: 30,
};

// function getKeys(obj) {
//   return Object.keys(obj).forEach(el => console.log(el));
// }

const getKeys = obj => Object.keys(obj).forEach(el => console.log(el));

getKeys(users);

function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

let obje = {
  name: 'Tom',
  age: 17,
  hobby: 'football',
  married: false,
  'favorite music': 'rock',
};

console.log(getKeys(obje));

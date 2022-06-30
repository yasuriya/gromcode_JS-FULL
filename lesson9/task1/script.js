const users = {
  John: 23,
  Ann: 16,
  Rick: 44,
  Patty: 15,
  Steve: 30,
};

const getAdults = obj =>
  Object.entries(obj)
    .filter(el => el[1] >= 18)
    .map(el => el[0]);

console.log(getAdults(users));

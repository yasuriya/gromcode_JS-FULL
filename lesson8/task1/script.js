const transformToObject = arr => {
  const obj = {};

  arr.forEach(element => {
    obj[element] = element;
  });

  return obj;
};

console.log(transformToObject([1, 'a', 3, 4, 5, 'hello world']));

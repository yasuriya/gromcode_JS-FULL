const array = [11, 27, 3, [4, 5], 62, 7, [8]];

const flatArray = arr => [...arr].flat().sort((a, b) => a - b);

console.log(flatArray(array));

export const mult = a => b => a * b;
export const twice = mult(2);
export const triple = mult(3);

console.log(mult(2)(5));
console.log(twice(3));
console.log(triple(3));

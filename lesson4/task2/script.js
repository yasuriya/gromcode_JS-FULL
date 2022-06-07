const m = 7,
  n = 17;
let result = 1;

for (let i = m; i <= n; i++) {
  if (i % 2 === 1) {
    result *= i;
  }
}
console.log(result);

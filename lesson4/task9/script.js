let sum = 0;

for (let i = 0; i <= 1000; i++) {
  sum += i;
}

let mod = sum % 1234,
  div = (sum - mod) / 1234;

const result = div > mod ? true : false;

console.log(result);

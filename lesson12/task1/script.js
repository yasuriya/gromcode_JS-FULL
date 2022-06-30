// input: expression(string)
// output: string

// transform expression to array
// create variable for result
// check the array with switch statement
// return result

const calc = expression => {
  const [a, operator, b] = expression.split(' ');
  let data;
  switch (operator) {
    case '+':
      data = Number(a) + Number(b);
      break;
    case '-':
      data = a - b;
      break;
    case '*':
      data = a * b;
      break;
    case '/':
      data = a / b;
      break;
    default:
  }

  return `${expression} = ${data}`;
};

console.log(calc('3 * 2'));

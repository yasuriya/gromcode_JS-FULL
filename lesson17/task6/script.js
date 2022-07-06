/* ===> 1 <=== */
const student = {
  name: 'Tom',
};

function sayName() {
  console.log(this.name);
}
const sayStudentName = sayName.bind(student);
sayStudentName();
const sayBruceName = sayName.bind({ name: 'Bruce' });
sayBruceName();

/* ===> 2 <=== */
const company = {
  companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

const specialGreeting = greeting.bind(company, 'Bob', 'Marley');
specialGreeting();

/* ===> 3 <=== */
const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

const getUkrainePopulation = getPopulation.bind(country, 43000);
getUkrainePopulation();

/* ===> 4 <=== */
const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
    console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
  },
};

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};

const printSpecialTransaction = transaction.printTransaction.bind(anotherTransaction);
printSpecialTransaction();

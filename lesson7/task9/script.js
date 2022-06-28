const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

function withdraw(clients, balances, client, amount) {
  let clientIndex = clients.indexOf(client);
  if (balances[clientIndex] >= amount) {
    return balances[clientIndex] - amount;
  } else {
    return -1;
  }
}
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

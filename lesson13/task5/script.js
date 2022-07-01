export const reverseArray = arr => (!Array.isArray(arr) ? null : [...arr].reverse());

export const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

export const getAdults = obj => {
  const result = {};

  for (let key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }

  return result;
};

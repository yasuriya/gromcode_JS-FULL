/* eslint-disable no-restricted-syntax */
// ? input : object
// ? output: array

export function getOwnProps(obj) {
  const arr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      arr.push(prop);
    }
  }
  return arr;
}

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
const ship = {
  name: 'Argo',
  gas: 1,
  boolean: true,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
};

console.log(getOwnProps(ship));

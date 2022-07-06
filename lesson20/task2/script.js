/* eslint-disable max-classes-per-file */
export class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}

const shipOne = new Ship('Argo', 7, 270);
console.log(shipOne);
shipOne.move();
shipOne.stop();

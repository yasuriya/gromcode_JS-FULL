'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */

export class Order {
  id = (Math.random() * 10000).toFixed();

  dateCreated = new Date();

  isConfirmed = false;

  dateConfirmed = null;

  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
    }
    this.dateConfirmed = new Date();
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

const myOrder = new Order(1300, 'Katowice', 'Buy');

console.log(myOrder);
console.log(myOrder.checkPrice());

myOrder.confirmOrder();
console.log(myOrder);

console.log(myOrder.isValidType());

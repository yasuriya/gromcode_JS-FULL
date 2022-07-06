'use strict';

// ?getInvitation() input : none
// ? output: [{object}]

export const event = {
  guests: [
    { name: 'John', age: 17, email: 'j@gmail.com' },
    { name: 'Tom', age: 22, email: 't@gmail.com' },
    { name: 'Paul', age: 61, email: 'p@gmail.com' },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());

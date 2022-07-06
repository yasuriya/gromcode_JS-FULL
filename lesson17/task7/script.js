/* eslint-disable prefer-destructuring */
// ? getFullName
// ? input: none
// ? output: string

// ? setFullName
// ? input: string
// ? output: undefined

const user = {
  firstName: 'Boris',
  lastName: 'Johnson',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const fullNameArr = fullName.split(' ');
    this.firstName = fullNameArr[0];
    this.lastName = fullNameArr[1];
  },
};

console.log(user.getFullName());

user.setFullName('Joe Biden');

console.log(user.getFullName());

const user = {
  firstName: 'John',
  lastName: 'Doe',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(fullNameStr) {
    [this.firstName, this.lastName] = fullNameStr.split(' ');
  },
};

console.log(user.fullName);
user.fullName = 'Jack Sparrow';
console.log(user.fullName);

export default user;

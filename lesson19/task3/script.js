export function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    return false;
  }
  this.age = newAge;
  if (newAge >= 25) {
    this.requestNewPhoto();
  }
  return this.age;
};

const user1 = new User('Jack', 22);
// console.log(user1);
// user1.setAge(23);
// console.log(user1);
console.log(user1.setAge(-1));
console.log(user1.setAge(27));
console.log(user1.setAge(20));

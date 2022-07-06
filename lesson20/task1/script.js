export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return this.age;
  }

  static createEmpty() {
    return new User('', null);
  }
}

const user1 = new User('Jack Sparrow', 42);
console.log(user1);
console.log(user1.sayHi());
console.log(User.createEmpty());

/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(el => el.name);
  }

  getUserIds() {
    return this._users.map(el => el.id);
  }

  getUserNameById(userId) {
    return this._users.find(el => el.id === userId).map(el => el.name);
  }
}

const user = new User('1', 'Tom', '#32131');
const user1 = new User('2', 'Jack', '#30931');
const user2 = new User('3', 'Bill', '#44531');
const user3 = new User('4', 'Joe', '#7731');

const usersArray = [
  { id: '1', name: 'Tom', sessionId: '#32131' },
  { id: '2', name: 'Jack', sessionId: '#30931' },
  { id: '3', name: 'Bill', sessionId: '#44531' },
  { id: '4', name: 'Joe', sessionId: '#7731' },
];

const newRepo = new UserRepository(usersArray);
console.log(newRepo.getUserNameById('1'));
console.log(newRepo.getUserNameById('4'));
console.log(newRepo.getUserNames());
console.log(newRepo.getUserIds());

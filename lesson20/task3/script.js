export class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance < amount) {
      console.log('No enough funds');
      return;
    }
    this._balance -= amount;
  }
}

const myWallet = new Wallet();

myWallet.deposit(100);
console.log(myWallet.getBalance());
myWallet.withdraw(88);
console.log(myWallet.getBalance());
myWallet.withdraw(30);
console.log(myWallet.getBalance());

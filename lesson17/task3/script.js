// input: function & number
// output: string

export function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Jim',
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const defferedHi = defer(user.sayHi, 2000);
defferedHi.call({ name: 'Jan' });

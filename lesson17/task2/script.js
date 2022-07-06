// input: object
// output: number

export const callbackPrompt = {
  message: 'Hello, type your mobile phone number below:',
  showPrompt() {
    const data = prompt(this.message);
    console.log(data);
  },

  showDefferedPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showPrompt();
console.log(callbackPrompt.showDefferedPrompt(2000));

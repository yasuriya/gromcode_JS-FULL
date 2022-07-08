function createButton(buttonText) {
  const btn = document.createElement('button');
  btn.textContent = buttonText;
  document.querySelector('body').append(btn);
}

createButton('Confirm');

function finishForm() {
  const nameInput = document.createElement('input');
  nameInput.setAttribute('name', 'login');
  nameInput.setAttribute('type', 'text');
  document.querySelector('.login-form').prepend(nameInput);

  const passInput = document.querySelector('input[name="password"]');
  passInput.setAttribute('type', 'password');
}
finishForm();

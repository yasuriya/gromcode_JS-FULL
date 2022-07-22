const baseUrl = 'https://62da76989eedb699636eee99.mockapi.io/api/v1/clients';

const loginForm = document.querySelector('.login-form');
const regButton = document.querySelector('.submit-button');

function formValidation() {
  if (!loginForm.reportValidity()) {
    return regButton.setAttribute('disabled', true);
  }
  return regButton.removeAttribute('disabled');
}

function onSubmit(event) {
  event.preventDefault();

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(Object.fromEntries(new FormData(loginForm))),
  })
    .then(response => response.json())
    .then(user => alert(JSON.stringify(user)));

  loginForm.reset();
}

loginForm.addEventListener('input', formValidation);
loginForm.addEventListener('submit', onSubmit);

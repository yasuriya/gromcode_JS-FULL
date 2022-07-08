const button = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');

button.addEventListener('click', () => {
  console.log(input.value);
});

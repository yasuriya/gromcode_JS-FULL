function finishList() {
  const one = document.createElement('li');
  one.textContent = '1';
  document.querySelector('.list').prepend(one);

  const specialFive = document.querySelector('.special');
  const four = document.createElement('li');
  four.textContent = '4';
  specialFive.before(four);

  const six = document.createElement('li');
  six.textContent = '6';
  specialFive.after(six);

  const eight = document.createElement('li');
  eight.textContent = '8';
  document.querySelector('.list').append(eight);
}
finishList();

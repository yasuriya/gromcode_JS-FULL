function squaredNumbers() {
  const numberAttributes = document.querySelectorAll('.number');
  [...numberAttributes].map(el => (el.dataset.squaredNumber = el.dataset.number ** 2));
}

squaredNumbers();

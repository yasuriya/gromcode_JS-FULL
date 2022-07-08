function getSection(num) {
  const numElement = document.querySelector(`span[data-number="${num}"]`);
  const parentElement = numElement.closest('.box');
  return parentElement.dataset.section;
}

getSection(2);
getSection(5);

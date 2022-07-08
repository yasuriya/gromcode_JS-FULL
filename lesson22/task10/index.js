const pagination = document.querySelectorAll('.pagination__page');
const page1 = pagination[0];
const page2 = pagination[1];
const page3 = pagination[2];

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

page1.addEventListener('click', handleClick);
page2.addEventListener('click', handleClick);
page3.addEventListener('click', handleClick);

const allBtns = document.querySelectorAll('.btn');
const jsBtn = allBtns[0];
const htmlBtn = allBtns[1];

const handleClick = event => {
  console.log(event.target);
  console.log(event.target.textContent);
};

jsBtn.addEventListener('click', handleClick);
htmlBtn.addEventListener('click', handleClick);

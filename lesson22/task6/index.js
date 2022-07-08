const singleUseBtn = document.querySelector('.single-use-btn');
const clickedText = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', clickedText);
};
singleUseBtn.addEventListener('click', clickedText);

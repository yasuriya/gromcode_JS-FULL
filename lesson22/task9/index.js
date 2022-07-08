const taskStatus = document.querySelector('.task-status');

taskStatus.addEventListener('change', event => {
  if (event.target.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
});

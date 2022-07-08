const taskStatus = document.querySelector('.task-status');
taskStatus.addEventListener('change', () => {
  if (taskStatus.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
});

import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

const listElem = document.querySelector('.list');

export const checkboxStatusChange = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const checkedItem = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map(task => {
    if (task.id === checkedItem) {
      const done = event.target.checked;
      return {
        ...task,
        done,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};

listElem.addEventListener('change', checkboxStatusChange);

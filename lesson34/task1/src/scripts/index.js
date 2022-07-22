import { initToDoListHandlers } from './todoList.js';
import { renderTasks } from './render.js';
import { getTasksList } from './taskGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    setItem('tasksList', tasksList);
    renderTasks();
  });

  initToDoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

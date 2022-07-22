import { addTask } from './create.js';
import { listElem } from './storage.js';
import { onListClick } from './change.js';

export const initToDoListHandlers = () => {
  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', addTask);
  listElem.addEventListener('click', onListClick);
};

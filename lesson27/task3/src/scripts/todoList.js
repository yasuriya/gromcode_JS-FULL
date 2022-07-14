import { addNewTask } from './create.js';
import { checkboxStatusChange } from './change.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', addNewTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', checkboxStatusChange);
};

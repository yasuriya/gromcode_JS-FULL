import { setItem } from './storage.js';
import { renderTasks } from './render.js';
import { createTask, getTasksList } from './taskGateway.js';

export const addTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;

  if (!text) {
    return;
  }
  inputElem.value = '';

  const newTask = {
    text,
    done: false,
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

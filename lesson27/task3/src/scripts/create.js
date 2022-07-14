import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

export const addNewTask = event => {
  if (taskInput.value === '') {
    return;
  }
  const tasksList = getItem('tasksList') || [];
  console.log(tasksList);
  const newTasksList = tasksList.push({
    text: taskInput.value,
    done: false,
    id: Math.floor(Math.random().toString()),
  });
  setItem('tasksList', newTasksList);
  renderTasks();
  taskInput.value = '';
};

createTaskBtn.addEventListener('click', addNewTask);

import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask, deleteTask } from './taskGateway.js';

export const handleClick = e => {
  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    done,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

const onTaskDelete = e => {
  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onListClick = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  const isDeleteBtn = e.target.classList.contains('list__item-delete-btn');

  if (isCheckbox) {
    handleClick(e);
  }
  if (isDeleteBtn) {
    onTaskDelete(e);
  }
};

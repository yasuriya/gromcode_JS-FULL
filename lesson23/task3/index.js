// algo:
// 1. create id for each task
// 2. set id to data attribute
// 3. create function to change checkbox status
// 4. create function to add event to 'create' button
// 5. refactoring

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const createId = array => {
  array.map((el, i) => (el.id = i));
};
createId(tasks);
const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const checkboxStatusChange = event => {
  const checkedItem = event.target.dataset.id;
  tasks
    .filter(el => el.id === Number(checkedItem))
    .map(el => (!el.done ? (el.done = true) : (el.done = false)));

  renderTasks(tasks);
};

listElem.addEventListener('click', checkboxStatusChange);

const createTaskBtn = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');

const addNewTask = event => {
  if (taskInput.value === '') {
    return;
  }

  tasks.push({
    text: taskInput.value,
    done: false,
  });
  createId(tasks);

  renderTasks(tasks);
  taskInput.value = '';
};

createTaskBtn.addEventListener('click', addNewTask);

renderTasks(tasks);

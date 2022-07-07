'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listElement = document.querySelector('.list');

  const listItemElements = tasksList
    .sort((a, b) => a.done - b.done)
    .map(itemText => {
      const listItemElement = document.createElement('li');
      listItemElement.classList.add('list__item');
      if (itemText.done) {
        listItemElement.classList.add('list__item_done');
      }
      const checkBoxElement = document.createElement('input');
      checkBoxElement.setAttribute('type', 'checkbox');
      checkBoxElement.checked = itemText.done;
      checkBoxElement.classList.add('list__item-checkbox');
      listItemElement.append(checkBoxElement, itemText.text);

      return listItemElement;
    });

  listElement.append(...listItemElements);
};

renderTasks(tasks);

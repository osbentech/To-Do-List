import enableEdit, { updateTask } from "./edit.js";
import removeTask from "./remove.js";
import updateStatus from "./statusOperation.js";

export const addTask = (task) => {
  const form = document.querySelector('.form');
  const list = document.createElement('div');
  list.id = `${task.index}`;
  list.className = 'input-div';
  form.appendChild(list);
  const checkboxes = document.createElement('input');
  checkboxes.onclick = updateStatus;
  checkboxes.className = 'input';
  checkboxes.type = 'checkbox';
  checkboxes.checked = task.completed;
  const listText = document.createElement('input');
  listText.addEventListener('change', (e) => {
    updateTask(e);
    e.target.parentElement.focus();
    // e.preventDefault()
  });
  listText.value = task.description;
  listText.className = 'listContent';
  listText.disabled = true;
  const threeDots = document.createElement('i');
  threeDots.onclick = enableEdit;
  threeDots.className = 'fas fa-ellipsis-v';
  const trashIcon = document.createElement('i');
  trashIcon.className = 'fas fa-trash-alt icon2';
  trashIcon.onclick = removeTask
  list.append(checkboxes, listText, threeDots, trashIcon);
  document.querySelector('.listContainer').appendChild(list);
};
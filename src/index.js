// all imports goes here
import './styles/main.css';
import Template from './module/Template.js';
import { updateTask } from './module/edit.js';
import { updateWindow } from './module/updateWindow.js';
import { clearAllCompleteted } from './module/statusOperation.js';

let array = [];
const sendToLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(array));
};

// Entering list event
const dataEntry = document.querySelector(' .dataEntry');
dataEntry.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    createTask(e);
    e.preventDefault()
  }
});

// Window Load event
window.addEventListener('load', () => {
  updateWindow();
  document.querySelector('#clear').onclick = clearAllCompleteted;
});

function createTask(e) {
  const taskArray = (localStorage.getItem('list') ? JSON.parse((localStorage.getItem('list'))) : []);
  const task = new Template(e.target.value, false, taskArray.length)
  console.log(task, "Jafer")
  taskArray.push(task);
  localStorage.setItem('list', JSON.stringify(taskArray));
  e.target.value = "";
  updateWindow();
}
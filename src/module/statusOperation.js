import { updateWindow } from './updateWindow.js';
// Add event to checkboxes

export default function updateStatus() {
  console.log([...this.parentElement.querySelectorAll('i')][0]);
  [...this.parentElement.querySelectorAll('i')][0].classList.toggle('remove-icon-active');
  [...this.parentElement.querySelectorAll('i')][1].classList.toggle('icon2');
  this.parentElement.querySelector('input').classList.toggle('listContent-disable');
  this.parentElement.classList.toggle('changeBg');
  const taskArray = JSON.parse(localStorage.getItem('list'));
  const taskIndex = Number(this.parentElement.id);
  taskArray[taskIndex].completed = !taskArray[taskIndex].completed;
  localStorage.setItem('list', JSON.stringify(taskArray));
};

export const clearAllCompleteted = () => {
  const taskArray = JSON.parse(localStorage.getItem('list'));
 
  console.log(newTaskArray);
  localStorage.setItem('list', JSON.stringify(newTaskArray));
  updateWindow();
}
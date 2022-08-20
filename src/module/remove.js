import { createList } from "../index.js";
import { section } from "../index.js";

export default function removeTask() {
  const id = Number(this.parentElement.id);
  const taskArray = JSON.parse(localStorage.getItem('list'));
  taskArray.splice(id, 1);
  for (let i = 0; i < taskArray.length; i += 1) {
    taskArray[i].id = i;
  }

  localStorage.setItem('list', JSON.stringify(taskArray));
  this.parentElement.remove();
}
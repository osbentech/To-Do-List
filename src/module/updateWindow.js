import { addTask } from "./Add";

export const updateWindow = () => {
  const taskArray = (localStorage.getItem('list') ? JSON.parse((localStorage.getItem('list'))) : []);
  document.querySelector('.listContainer').innerHTML = "";
  taskArray.map((task) => addTask(task))
}
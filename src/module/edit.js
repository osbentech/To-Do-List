export default function enableEdit() {
  this.parentElement.querySelector('.listContent').disabled = false;
}

export function updateTask(e) {
  const id = Number(e.target.parentElement.id);
  const taskArray = JSON.parse(localStorage.getItem('list'));
  taskArray[id].description = e.target.value;
  localStorage.setItem('list', JSON.stringify(taskArray));
  e.target.disabled = true;
  location.reload();
}
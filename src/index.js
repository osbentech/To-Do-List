// all imports goes here
// import { Template } from 'webpack';
import './styles/main.css';

// reference section starts here
const mainTodo = document.querySelector('.todo');
const firstmat = document.getElementById('mat1');
const input = document.querySelector('.span2');
const clearbtn = document.querySelector('.footer');

// Template class objects starts here
class Myobject {
  constructor(description, completed, index){
    this.description = description
    this.completed = completed
    this.index = index
  }
}

const myArray = [];
const addTodo = (todoValue) => {
  const todocontainer = document.createElement('div');
  todocontainer.className = 'todocontainer';
  todocontainer.innerHTML += `
    <input type="checkbox" class="checkbox";
    <span>${todoValue}</span>
    <span id="add-to-icon" class="material-icons"> more_horiz</span>
    <span id="basketdel-icon" class="material-icons">delete_forever</span>
  `;

  mainTodo.appendChild(todocontainer);

  // checkbox starts here
  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach(i =>{
    i.addEventListener('click', ()=>{
      i.parentElement.classList.toggle('checked')
    })
  })

};

input.addEventListener('keypress', e=>{
  if (e.key === 'Enter' && input.value) {
    e.preventDefault();
    addTodo(input.value);
    input.value = "";
  }
})
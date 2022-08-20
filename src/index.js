// all imports goes here
// import { Template } from 'webpack';
import './styles/main.css';

// reference section starts here
const mainTodo = document.querySelector('.todo');
const firstmat = document.getElementById('mat1');
const inputs = document.querySelector('.span2');
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
    <input type="checkbox" class="checkbox">
    <span>${todoValue}</span>
    <span id="f" class="material-icons"> more_horiz</span>
    <span class="material-icons hiden">delete_forever</span>
  `;

  mainTodo.appendChild(todocontainer);

  // checkbox starts here
  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach(i =>{
    i.addEventListener('click', ()=>{
      i.parentElement.classList.toggle('checked')
      i.nextElementSibling.classList.toggle('checkTodo')
      i.parentElement.lastElementChild.classList.toggle('hiden')
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('dotdisable')
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('hiden')
    })
  })

  const object = new Myobject(todoValue, false, checkbox.length)
  myArray.push(object)
  localStorage.setItem('list', JSON.stringify(myArray));

  const sideicons = document.querySelectorAll("[id='f']");
  sideicons.forEach(i => {
    i.addEventListener('click', ()=>{
      ediTodo(todocontainer, i.previousElementSibling);
    })
  })
};

const ediTodo = (todocontainer, todo) => {
  const editinput = document.createElement('input');
  editinput.type = 'text';
  editinput.className = ' editinput';
  editinput.value = todo.textContent
  todocontainer.replaceChild(editinput, todo);
  editinput.addEventListener('keypress', e=>{
    e.preventDefault();
    if (e.key === 'Enter') {
      const todoscontainers = document.querySelectorAll('.todo');
      const localData = JSON.parse(localStorage.getItem('list'));
      for (let i = 0; i < todoscontainers.length; i += 1) {
        if (todoscontainers[i].classList.contains('checked')) {
          localData[i].description =  editinput.value;
          localStorage.setItem('list', JSON.stringify(localData));
        }
      }
    }
    editinput.parentElement.classList.remove('checked');
    todocontainer.replaceChild(todo,  editinput);
    todo.textContent =  editinput.value;
  })
}

inputs.addEventListener('keypress', e=>{
  if (e.key === 'Enter' && inputs.value) {
    e.preventDefault();
    addTodo(inputs.value);
    inputs.value = "";
  }
})
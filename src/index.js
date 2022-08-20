// all imports goes here
// import { Template } from 'webpack';
import './styles/main.css';

// reference section starts here
// const mainTodo = document.querySelector('.todo');
// const firstmat = document.getElementById('mat1');
// const inputs = document.querySelector('.span2');
// const clearbtn = document.querySelector('.footer');

// // Template class objects starts here
// class Myobject {
//   constructor(description, completed, index){
//     this.description = description
//     this.completed = completed
//     this.index = index
//   }
// }

// const myArray = [];
// const addTodo = (todoValue) => {
//   const todocontainer = document.createElement('div');
//   todocontainer.className = 'todocontainer';
//   todocontainer.innerHTML += `
//     <input type="checkbox" class="checkbox">
//     <span>${todoValue}</span>
//     <span id="f" class="material-icons"> more_horiz</span>
//     <span class="material-icons hiden">delete_forever</span>
//   `;

//   mainTodo.appendChild(todocontainer);

  // checkbox starts here
  // const checkbox = document.querySelectorAll('.checkbox');
  // checkbox.forEach(i =>{
  //   i.addEventListener('click', ()=>{
  //     i.parentElement.classList.toggle('checked')
  //     i.nextElementSibling.classList.toggle('checkTodo')
  //     i.parentElement.lastElementChild.classList.toggle('hiden')
  //     i.parentElement.lastElementChild.previousElementSibling.classList.toggle('dotdisable')
  //     i.parentElement.lastElementChild.previousElementSibling.classList.toggle('hiden')
  //   })
  // })

//   const object = new Myobject(todoValue, false, checkbox.length)
//   myArray.push(object)
//   localStorage.setItem('list', JSON.stringify(myArray));

//   const sideicons = document.querySelectorAll("[id='f']");
//   sideicons.forEach(i => {
//     i.addEventListener('click', ()=>{
//       editTodo(todocontainer, i.previousElementSibling);
//     })
//   })
// };

// const editTodo = (todocontainer, todo) => {
//   const editinput = document.createElement('input');
//   editinput.type = 'text';
//   editinput.className = ' editinput';
//   editinput.value = todo.textContent
//   todocontainer.replaceChild(editinput, todo);
//   editinput.addEventListener('keypress', e=>{
//     e.preventDefault();
//     if (e.key === 'Enter') {
//       const todoscontainers = document.querySelectorAll('.todo');
//       const localData = JSON.parse(localStorage.getItem('list'));
//       for (let i = 0; i < todoscontainers.length; i += 1) {
//         if (todoscontainers[i].classList.contains('checked')) {
//           localData[i].description =  editinput.value;
//           localStorage.setItem('list', JSON.stringify(localData));
//         }
//       }
//     }
//     editinput.parentElement.classList.remove('checked');
//     todocontainer.replaceChild(todo,  editinput);
//     todo.textContent =  editinput.value;
//   })
// }

// inputs.addEventListener('keypress', e=>{
//   if (e.key === 'Enter' && inputs.value) {
//     e.preventDefault();
//     addTodo(inputs.value);
//     inputs.value = "";
//   }
// })


class Template {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let array = [];
const sendToLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(array));
};

const section = document.querySelector('section');
section.innerHTML = `
  <div class="main-div">
    <p id="header">Today's To Do <i class="fas fa-sync"></i></p>
    <form class="form">
      <input class="dataEntry" type="text" placeholder="Add to your list..." required></input>
    </form>
    <p id="clear">Clear all completed</p>
  </div>
`;
// Create list
const createList = () => {
  const form = document.querySelector('.form');
  const list = document.createElement('div');
  list.className = 'input-div';
  form.appendChild(list);
  const checkboxes = document.createElement('input');
  checkboxes.className = 'input';
  checkboxes.type = 'checkbox';
  const listText = document.createElement('p');
  listText.className = 'listContent';
  const threeDots = document.createElement('i');
  threeDots.className = 'fas fa-ellipsis-v';
  const trashIcon = document.createElement('i');
  trashIcon.className = 'fas fa-trash-alt icon2';
  list.append(checkboxes, listText, threeDots, trashIcon);
  // Add event to checkboxes
  let count = 1;
  checkboxes.addEventListener('click', () => {
    threeDots.classList.toggle('remove-icon-active');
    trashIcon.classList.toggle('icon2');
    listText.classList.toggle('listContent-disable');
    list.classList.toggle('changeBg');
    const getting = JSON.parse(localStorage.getItem('list'));
    const empty = [];
    const hammasi = document.querySelectorAll('.input-div');
    for (let i = 0; i < getting.length; i += 1) {
      if (hammasi[i].classList.contains('changeBg')) {
        getting[i].completed = true;
        count += 1;
      } else {
        getting[i].completed = false;
      }
      empty.push(getting[i]);
      localStorage.setItem('list', JSON.stringify(empty));
    }
  });
  const clearAll = document.querySelector('#clear');
  clearAll.addEventListener('click', () => {
    const getting = JSON.parse(localStorage.getItem('list'));
    const variable = document.querySelectorAll('.changeBg');
    for (let i = 0; i < variable.length; i += 1) {
      form.removeChild(variable[i]);
    }
    const empty = [];
    for (let i = 0; i < getting.length; i += 1) {
      if (getting[i].completed === true) {
        continue;
      }
      empty.push(getting[i]);
    }
    localStorage.setItem('list', JSON.stringify(empty));
  });

  // Remove from list event
  

  threeDots.addEventListener('click', () => {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'listContent';
    editInput.style.backgroundColor = '#fffed3';
    list.style.backgroundColor = '#fffed3';
    editInput.value = listText.textContent;
    list.replaceChild(editInput, listText);
    editInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && editInput.value) {
        const getting = JSON.parse(localStorage.getItem('list'));
        const result = getting.filter((word) => word.description === listText.textContent);
        const empty = [];
        for (let i = 0; i < getting.length; i += 1) {
          if (getting[i].index === result[0].index) {
            getting[i].description = editInput.value;
          }
          empty.push(getting[i]);
          localStorage.setItem('list', JSON.stringify(empty));
        }
        list.replaceChild(listText, editInput);
        listText.textContent = editInput.value;
        list.style.backgroundColor = '#fff';
      }
    });
  });
};

// Entering list event
const dataEntry = document.querySelector('.dataEntry');
dataEntry.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && dataEntry.value) {
    const object = new Template(dataEntry.value, false, array.length);
    array.push(object);
    e.preventDefault();
    createList();
    const listText = document.querySelectorAll('.listContent');
    for (let i = 0; i < array.length; i += 1) {
      listText[i].textContent = array[i].description;
    }
    dataEntry.value = null;
    sendToLocalStorage();
  }
});

// Window Load event
window.addEventListener('load', () => {
  const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));
  for (let i = 0; i < getFromLocalStorage.length; i += 1) {
    createList();
    const listText = document.querySelectorAll('.listContent');
    listText[i].textContent = getFromLocalStorage[i].description;
    if (getFromLocalStorage[i].completed === true) {
      getFromLocalStorage[i].completed = false;
    }
    localStorage.setItem('list', JSON.stringify(getFromLocalStorage));

    array = getFromLocalStorage;
  }
});

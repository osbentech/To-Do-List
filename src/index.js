import './styles/main.css';
// import joke from './joke.js';

// const jokes = document.querySelector('.joke');
// jokes.innerHTML = joke();

const todo = document.querySelector('.todo');

const todoArr = [
  {
    Description: 'ironing',
    Completed: false,
    Index: 0,
  },
  {
    Description: 'washing',
    Completed: false,
    Index: 1,
  },
  {
    Description: 'cooking',
    Completed: false,
    Index: 2,
  },
];

function showTask() {
  for (let i = 0; i < todoArr.length; i += 1) {
    todo.innerHTML += ` <div class="tasks">
    <div class="task-wrapper">
      <input class="check" type="checkbox">
      <p class="txt">${todoArr[i].Description}</p>
    </div>
    <button class="remove-btn">Remove</button>
    </div>`;
  }
}

showTask();

localStorage.setItem('name', 'Mario');
localStorage.setItem('age', 50);


let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(name, age)


localStorage.removeItem('name');
localStorage.clear();

const todos = [
  {text: 'play mariokart', author: 'shaun'},
  {text: 'buy some milk', author: 'Mario'},
  {text: 'bread', author: 'Luigi'}
];

//console.log(JSON.stringify(todos))

localStorage.setItem('todos', JSON.stringify(todos));

const stored = JSON.parse(localStorage.getItem('todos'))

console.log(stored)
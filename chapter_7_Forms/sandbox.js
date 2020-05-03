const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/


form.addEventListener('submit', e =>{
  e.preventDefault();
  console.log(form.username.value)

  const username = form.username.value;

  if(usernamePattern.test(username)){
    feedback.textContent = 'That username is valid';
  } else {
    feedback.textContent = 'That username is not valid';
  }


})

// const username = '1shaunaaa';
// const pattern = /^[a-z]{6,}$/

//let result = pattern.test(username);

// console.log(result);

// if(result){
//   console.log('regex test passed');
// } else {
//   console.log('test failed');
// }

// let result = username.search(pattern);

// console.log(result);



form.username.addEventListener('keyup', e =>{

  console.log(e.target.value);


  

  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute('class', 'succes');
  } else {
    form.username.setAttribute('class', 'error');
  }


})
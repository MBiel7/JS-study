//fetch api

// fetch('todos/luigi.json').then((response) => {
//   console.log('resolved', response);
//   return response.json();
// }).then((data) => {
//   console.log('data:', data);
// }).catch((err) => {
//   console.log('rejected:', err);
// });


//async and await

const getTodos = async() => {
  
  const response = await fetch('todos/luigi.json');

  if(response.status !== 200){
    throw new Error('cannot fetch data');
  }
  
  const data = await response.json();

  return data
};

getTodos()
  .then(data => console.log(data))
  .catch(err => console.log('Error:', err.message))


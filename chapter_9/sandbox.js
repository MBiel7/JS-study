// const scores = [10,30,15,25,50,40,5]

// let filteredScores = scores.filter((score) => {
//   return score > 20
// });

// console.log(filteredScores)


// const prices = [10,30,15,25,50,40,5]

// const salePrices = prices.map((price) => {
//   return price / 2;
// });

// console.log(salePrices)

// const products = [
//   {name: 'gold star', price: 20},
//   {name: 'mushroom', price: 40},
//   {name: 'green shells', price: 30},
//   {name: 'banana skin', price: 10},
//   {name: 'red shells', price: 50}
// ];

// const saleProducts = products.map(product => {
//   if(product.price > 30){
//     return {name: product.name, price: product.price / 2}
//   } else {
//     return product;
//   }
// });

// console.log(products, saleProducts);


// const scores = [10,30,15,25,50,40,5]

// const result = scores.reduce((acc, curr) => {
//   if(curr > 30){
//     acc++;
//   }
//   return acc;
// }, 0);

// console.log(result);


// const scores = [
//   {player: 'mario', score: 50},
//   {player: 'yoshi', score: 30},
//   {player: 'mario', score: 70},
//   {player: 'crystal', score: 60}
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//   if(curr.player === 'mario'){
//     acc += curr.score;
//   }
//   return acc;
// }, 0);

// console.log(marioTotal);


// const scores = [10,30,60,25,50,40,5]

// const firstHighScore = scores.find(score => {
// return score > 50;
// });

// console.log(firstHighScore)

// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort();
// names.reverse();
// console.log(names);

// const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort();
// console.log(scores);

// const players = [
//   {name: 'mario', score: 20},
//   {name: 'luigi', score: 10},
//   {name: 'chun-li', score: 50},
//   {name: 'yoshi', score: 30},
//   {name: 'shaun', score: 70}
// ];

// players.sort((a,b) => {
//   if(a.score > b.score){
//     return -1;
//   } else if (b.score > a.score){
//     return 1;
//   } else {
//     return 0;
//   }
// });

// players.sort((a,b) => b.score - a.score);
// console.log(players);


const products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

const filteredProducts = products.filter(product => product.price > 20).map(product => `the${product.name} is ${product.price / 2}`)

console.log(filteredProducts);
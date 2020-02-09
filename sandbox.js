// const names = ['a','b','c'];

// for(let i = 0; i < names.length; i++){
//     //console.log(names[i])
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// };


// function greet(){
//     console.log(`hello`);
// }

// //greet();

// const speak = function(){
//     console.log(`good day`)
// }

// //speak();

// const calcArea = function(radius){
//     return 3.14 * radius **2;
// }
// const area = calcArea(5);

// const calcArea2 = (radius) => {
//     return 3.14 * radius **2;
// }
// const area = calcArea(5);


// console.log(area);

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

let html = '';

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`
});

console.log(html);

ul.innerHTML = html;


console.log(`Hello`);

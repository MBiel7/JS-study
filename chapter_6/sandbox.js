// const para = document.querySelector('body > h1');
// console.log(para);

// const para = document.querySelectorAll('p');

// para.forEach(para => {
//     console.log(para);
// });

// const title = document.getElementById('page-title')
// console.log(title)

// const errors = document.getElementsByClassName('error');
// console.log(errors)

// const para = document.querySelector('p');

// console.log(para.innerText)

// para.innerText += ' Please kill me!'

// const paras = document.querySelectorAll('p');

// paras.forEach( (paras, index) => {
//     paras.innerText += (' ' + index)
// });

// const content = document.querySelector('.content');

// content.innerHTML = '<h2>nadpisany content</h2>'

// const people = ['Caleb','Nott','Yasha'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// });


// const link = document.querySelector('a');

// link.setAttribute('href','https://www.bing.com')
// link.innerText = 'Bing';
// console.log(link.getAttribute('href'));

// const mssg = document.querySelector('p');

// mssg.setAttribute('class','success');
// mssg.setAttribute('style','color:green');


// const title = document.querySelector('h1');

// console.log(title.style.color)

// title.style.margin = '50px';
// title.style.fontSize = '60px';

// const content = document.querySelector('p');

// console.log(content.classList)

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.textContent.includes('success')){
//         p.classList.add('success');
//     }
// });

// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');


// const article = document.querySelector('article');

// console.log(article.children);

// console.log(Array.from(article.children));

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// })

const title = document.querySelector('h2');

console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
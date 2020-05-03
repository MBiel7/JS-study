const button = document.querySelector('button');

const items = document.querySelectorAll('li');

const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    console.log('you clicked button');

    const li = document.createElement('li');
    li.textContent = 'something new';
    //ul.append(li);
    ul.prepend(li);

});

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log(e);
//         console.log('event in li');
//         //e.target.style.textDecoration = 'line-through';
//         e.stopPropagation();
//         e.target.remove();
//     });
// });

ul.addEventListener('click', e => {
    //console.log('event in ul');
    console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});

const copy = document.querySelector('.copy-me');
//-----------------------------------------------------------------------

copy.addEventListener('copy', () => {
    console.log('my content is copyright')
})

const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
    //console.log(e.offsetX,e.offsetY)
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY)
})
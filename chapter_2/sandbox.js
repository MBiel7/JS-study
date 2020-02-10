// function greet(){
// console.log('Hello')

// }
// const speak = function(){
//     console.log('Why?!');

// };


// greet();
// speak();


// const ul = document.querySelector('.people');

// const people = ['janek','marek','tomek','kamil','ola']

// let html = '';


// people.forEach(person => {

//     html += `<li style="color:purple">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;
// const blogs = [
//     {title: 'why am i alive', likes: 30},
//     {title: 'please kill me', likes: 20}
// ]


let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@email.com',
    location: 'berlin',
    blogs: [
            {title: 'why am i alive', likes: 30},
            {title: 'please kill me', likes: 20}
        ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
        })
    }
};

// console.log(user.name);

// console.log(user['name']);

// const key = 'name';

// console.log(user[key]);

//console.log(typeof user);

user.logBlogs();


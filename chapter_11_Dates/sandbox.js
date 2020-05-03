//const now = new Date();

// console.log(now);

// console.log(now.getFullYear());

// console.log(now.getMonth());

// console.log(now.getDate());

// console.log(now.getDay());

// console.log(now.getHours());

// console.log(now.getMinutes());

// console.log(now.getSeconds());

// //timestamp
// console.log(now.getTime());

// //date string

// console.log(now.toDateString());

// console.log(now.toTimeString());

// console.log(now.toLocaleString());

//comparison timestamps

// const before = new Date('februrary 1 2020 7:30:43');

// console.log(before);

// const diff = now.getTime() - before.getTime();

// console.log(diff)

// const mins = Math.round(diff/ 1000/ 60)
// const hours = Math.round(mins/ 60)
// const days = Math.round(hours/24)

// console.log(mins);
// console.log(hours);
// console.log(days);

// //convert timestamp to date

// const timestamp = 1585504103120

// console.log(new Date(timestamp))


//clock

const clock = document.querySelector('.clock');

const tick = () =>{

  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${h}</span>
    <span>${m}</span>
    <span>${s}</span>
  `

  clock.innerHTML = html;

};

setInterval(tick,1000)

//date-fns library

const nownfs = new Date();

console.log(dateFns.isToday(nownfs));

console.log(dateFns.format(nownfs,'ddd DD:MM:YYYY'));

//comparing dates

const beforenfs = new Date('februrary 1 2020 7:30:43');

console.log(dateFns.distanceInWords(nownfs, beforenfs, {addSuffix: true}))
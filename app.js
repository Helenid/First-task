const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const todaysDate = document.querySelector(".todaysDate");
const todaystime = document.querySelector(".todaysTime");

const hour = new Date().getHours();
const minute = new Date().getMinutes();
const seconds = new Date().getSeconds();
let day = new Date().getDay();
day = weekdays[day];
console.log(day);

todaysDate.textContent = `Today: ${day}`;
todaystime.textContent = `UTC time(milliseconds): ${new Date().getUTCMilliseconds()}`;
const monthText = document.querySelector("#month-div span");
const yearText = document.querySelector("#year-div span");
const dayText = document.querySelector("#day-div span");
const weekText = document.querySelector("#week-div span")
const timeText = document.querySelector("#time-wrap span");
const monthList = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
const weekList = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]

function getTime() {
  const date = new Date();
  let month = monthList[date.getMonth()];
  let year = date.getFullYear();
  let day = date.getDate();
  let week = weekList[date.getDay()];
  let hour = date.getHours().toString().padStart(2, "0");
  let min = date.getMinutes().toString().padStart(2, "0");
  let sec = date.getSeconds().toString().padStart(2, "0");

  monthText.innerText = month;
  yearText.innerText = year;
  dayText.innerText = day;
  weekText.innerText = week;
  timeText.innerText = `${hour}:${min}:${sec}`
}

function timer() {
  getTime();
  setInterval(getTime, 1000)
}

window.onload = timer();

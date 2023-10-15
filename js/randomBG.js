const body = document.querySelector("body");

function changeBG() {
  let BGList = [];
  for(let i = 1; i < 13; i ++) {
    BGList.push(i);
  };

  let BGIndex = Math.floor(Math.random() * BGList.length);
  body.style.backgroundImage = `url(./resources/bg${BGList[BGIndex]}.jpg)`
}

function randomBG() {
  setInterval(changeBG, 10000)
}

window.onload = randomBG();
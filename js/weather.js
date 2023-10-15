const region = document.querySelector("#region-success")
const regionFail= document.querySelector("#region-fail")
const tem = document.querySelector("#tem-div span:first-child")
const iconImg = document.querySelector("#icon-div img");

function success(position) {
  region.display = "inline-block";
  regionFail.style.display = "none";
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const key = "dc4a361b9e669dfb6cca009a5f09300b"
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`

  fetch(APIUrl).then(response => response.json()).then(data => {
    let regionData = data.name;
    let temData = data.main.temp;
    let iconData = data.weather[0].icon;

    region.innerText = regionData;
    tem.innerText = `${parseInt(temData)}℃`;
    iconImg.src = `resources/weatherIcons/${iconData}.png`
  })
}

function fail() {
  region.style.display = "none"
  tem.style.display = "none"
  iconImg.style.display = "none"
  regionFail.style.display = "inline-block"
  regionFail.innerText = "[Error] No Location Found";
}

window.onload = navigator.geolocation.getCurrentPosition(success, fail)
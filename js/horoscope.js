const horoscopeList = [
  {
    horoscope : "AQUARIUS (물병자리)",
    date : "01.20 - 02.18",
  },
  {
    horoscope : "PISCES (물고기자리)",
    date : "02.19 - 03.20",
  },
  {
    horoscope : "ARIES (양자리)",
    date : "03.21 - 04.19",
  },
  {
    horoscope : "TAURUS (황소자리)",
    date : "04.20 - 05.20",
  },
  {
    horoscope : "GEMINI (쌍둥이자리)",
    date : "05.21 - 06.21",
  },
  {
    horoscope : "CANCER (게자리)",
    date : "06.22 - 07.22",
  },
  {
    horoscope : "LEO (사자자리)",
    date : "07.23 - 08.22",
  },
  {
    horoscope : "VIRGO (처녀자리)",
    date : "08.23 - 09.22",
  },
  {
    horoscope : "LIBRA (천칭자리)",
    date : "09.23 - 10.22",
  },
  {
    horoscope : "SCORPIO (전갈자리)",
    date : "10.23 - 11.21",
  },
  {
    horoscope : "SAGITTARIUS (사수자리)",
    date : "11.22 - 12.21",
  },
  {
    horoscope : "CAPRICORN (염소자리)",
    date : "12.22 - 01.19",
  },
]
const horoscopeText = document.querySelector("#horoscope-box span:first-child");

window.onload = printRandomHoroscope(), setInterval(printRandomHoroscope, 3000)

function printRandomHoroscope() {
  let randomHoroscope = Math.floor(Math.random() * horoscopeList.length);
  horoscopeText.innerText = `${horoscopeList[randomHoroscope].horoscope} : ${horoscopeList[randomHoroscope].date}`;
}
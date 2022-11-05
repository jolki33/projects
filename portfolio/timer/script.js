const startBtb = document.querySelector(".start");
const pauseBtb = document.querySelector(".pause");
const stopBtb = document.querySelector(".stop");
const resetBtb = document.querySelector(".reset");
const historyBtb = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeListBtb = document.querySelector(".time-list");

const infoBtb = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

let countTime;
let minutes = 0;
let seconds = 0;

const handleStart = () => {
  countTime = setInterval(() => {
    if (seconds < 9) {
      seconds++;
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      stopwatch.textContent = `${minutes}:00`;
    }
  }, 100);
};

const handlePause

startBtb.addEventListener("click", handleStart);

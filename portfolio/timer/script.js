const startBtb = document.querySelector(".start");
const pauseBtb = document.querySelector(".pause");
const stopBtb = document.querySelector(".stop");
const resetBtb = document.querySelector(".reset");
const historyBtb = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const infoBtb = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
  clearInterval(countTime);
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

const handlePause = () => {
  clearInterval(countTime);
};

const handleStop = () => {
  time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

  if (stopwatch.textContent !== "0:00") {
    time.style.visibility = "visible";
    timesArr.push(stopwatch.textContent);
    console.log(timesArr);
  }

  clearStuff();
};

const handleReset = () => {
  time.style.visibility = "hidden";
  timesArr = [];
  clearStuff();
};

const clearStuff = () => {
  clearInterval(countTime);
  stopwatch.textContent = "0:00";
  timeList.textContent = "";
  seconds = 0;
  minutes = 0;
};

const showHistory = () => {
  timesArr.forEach((time) => {
    timeList.textContent = "";
    const newTime = document.createElement("li");
    newTime.innerHTML = `Pomiar nr X: <span>${time}</span>`;

    timeList.appendChild(newTime);
  });
};

startBtb.addEventListener("click", handleStart);
pauseBtb.addEventListener("click", handlePause);
stopBtb.addEventListener("click", handleStop);
resetBtb.addEventListener("click", handleReset);
historyBtb.addEventListener("click", showHistory);

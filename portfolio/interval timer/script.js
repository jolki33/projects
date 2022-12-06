const slider = document.querySelector(".slider input");
const progressBar = document.querySelector(".slider progress");
const sliderValue = document.querySelector(".sliderValue");

    slider.oninput = (()=>{
        let value = slider.value;
        sliderValue.textContent = value;
        progressBar.value = slider.value;
    });


// Toggle timer buttons
const toggleTimerBtns = document.getElementsByClassName("toggle-timer");
const increaseSession = document.getElementById("increase-session");
const decreaseSession = document.getElementById("decrease-session");
const increaseBreak = document.getElementById("increase-break");
const decreaseBreak = document.getElementById("decrease-break");

// Timer display
let sessionLengthDisplay = document.getElementById("session-length");
let breakLengthDisplay = document.getElementById("break-length");

// Countdown
let countdownDisplay = document.getElementById("countdown");
const typeDisplay = document.getElementById("type");
const resetCountdownBtn = document.getElementById("reset-session");
const stopCountdownBtn = document.getElementById("stop-session");
const startCountdownBtn = document.getElementById("start-session");
const countdownContainer = document.getElementById("countdown-container");

// Increase, decrease
decreaseSession.setAttribute('disabled', 'disabled');

increaseSession.addEventListener('click', ()=>{
   sessionLengthDisplay.value++;
   if (sessionLengthDisplay.value >= 1) {
    decreaseSession.removeAttribute('disabled');
   }
})
decreaseSession.addEventListener('click', ()=>{
    sessionLengthDisplay.value--;
    if (sessionLengthDisplay.value < 2) {
        decreaseSession.setAttribute('disabled','disabled');
    }
 })

decreaseBreak.setAttribute('disabled', 'disabled');

increaseBreak.addEventListener('click', () => {
    breakLengthDisplay.value++;
    if (breakLengthDisplay.value >= 1) {
        decreaseBreak.removeAttribute('disabled');
    }
})
decreaseBreak.addEventListener('click', () => {
    breakLengthDisplay.value--;
    if (breakLengthDisplay.value < 2) {
        decreaseBreak.setAttribute('disabled', 'disabled');
    }
})




/*
let interval;
let isStop = false;
let minutes;
let seconds;
let ifstop = 0;
let time;
let countdownEl;
startCountdownBtn.addEventListener('click', () => {

    countdownEl = document.getElementById('minutes');
    const start = sessionLengthDisplay.value;
    time = start * 60;
    startZ = setInterval (update, 500);
    function update () {

            minutes = Math.floor(time / 60);
            seconds = time % 60;

        if (time >=0){
            countdownEl.innerHTML = `${minutes}: ${seconds}`           
            time--;
        }
        else{
            clearInterval(startZ);
            startCountdownBtn.removeAttribute('disabled');
            ifstop = 0;
        }

    }
    if(update = true) {
        increaseSession.setAttribute('disabled', 'disabled');
        decreaseSession.setAttribute('disabled', 'disabled');
        startCountdownBtn.setAttribute('disabled', 'disabled');
    }
    if(countdownEl.textContent = 0 ){
        endTime();
    }
    
})

function stop () {
    clearInterval(startZ);
    startCountdownBtn.removeAttribute('disabled');
    ifstop = 1;
}
stopCountdownBtn.addEventListener('click', (stop));

function endTime (){
    stop();
}
*/
 let min = document.getElementById('minutes');
 let sec = document.getElementById('seconds');

let isPaused = false;

let time = sessionLengthDisplay.value;

startCountdownBtn.addEventListener('click', () => {
 let timer = setInterval(() => {
    
            min.innerHTML = parseInt(time / 60, 10);
            sec.innerHTML = parseInt(time % 60, 10);
            time--;
        })
   }
 , 1000);

resetCountdownBtn.addEventListener

stopCountdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isPaused = true;
})

startCountdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isPaused = false;
})
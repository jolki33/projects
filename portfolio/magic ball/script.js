const ball = document.querySelector("img");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const input = document.querySelector("input");

const answerArr = ["tak", "nie", "ciężko powiedzieć", "może"];

const shakeBall = () => {
  ball.classList.add("shake-animation");
  setTimeout(checkInput, 1000);
};

const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    generateAnswer();
    error.innerHTML = "";
    ball.classList.remove("shake-animation");
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.innerHTML = "Pytanie musi zawierać znak '?'.";
    answer.textContent = "";
    ball.classList.remove("shake-animation");
  } else {
    error.innerHTML = "Zadaj pytanie";
    answer.textContent = "";
    ball.classList.remove("shake-animation");
  }
};

const generateAnswer = () => {
  const number = Math.floor(Math.random() * 4);
  answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`;
};

ball.addEventListener("click", shakeBall);

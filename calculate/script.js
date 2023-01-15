const currentNumber = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber p");
const mathSign = document.querySelector(".mathSign");
const numbersButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const calculatorHistory = document.querySelector(".history");
const historyBtn = document.querySelector(".history-btn");

let resault = "";

const displayNumbers = () => {
  if (this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
  if (this.textContent === "." && currentNumber.innerHTML === "")
    return (currentNumber.innerHTML = ".0");

  currentNumber.innerHTML += this.textContent;
};

const operate = () => {};
const showResault = () => {};
const clearScreen = () => {};
const clearHistory = () => {};

operatorButtons.forEach((button) => {
  button.addEventListener("click", operate);
});

equalsButton.addEventListener("click", showResault);

clearButton.addEventListener("click", clearScreen);

numbersButtons.forEach((button) => {
  button.addEventListener("click", displayNumbers);
});

historyBtn.addEventListener("click", clearHistory);

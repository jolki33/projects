const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const count = document.querySelector(".count");
const error = document.querySelector(".error");
const CostInfo = document.querySelector(".cost-info");
const Coast = document.querySelector(".coast");

const showBill = () => {
  if (price.value == "" || people.value == "" || tip.value == 0) {
    error.textContent = "Uzupełnij wszystkie pola";
    CostInfo.style.display = "none";
  } else {
    error.textContent = "";
    countBill();
  }
};
/*jak zrobić żeby z funkcji countBill zmienne new... były pobierane z zakresu globalnego a nie lokalnego?
chodzi o wyeliminowanie parseFloat*/
const countBill = () => {
  const newPrice = parseFloat(price.value);
  const newPeople = parseInt(people.value);
  const newTip = parseFloat(tip.value);

  const sum = newPrice / newPeople + (newPrice / newPeople) * newTip;
  CostInfo.style.display = "block";
  Coast.textContent = sum.toFixed(2);
};

count.addEventListener("click", showBill);

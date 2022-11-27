const kcal = [12, 15, 25, 84, 15, 46, 74, 8];
let chleb = document.querySelector("#chleb");
const fotoChleb = document.querySelector(".fot-chleb");

let maslo = document.querySelector("#maslo");
const fotoMaslo = document.querySelector(".fot-maslo");

const chlebFunk = () => {
  if (chleb.checked) {
    fotoChleb.style.display = "block";
    chlebtxt.style.textDecoration = "line-through";
    if (sum.innerHTML !== "") {
      sum.innerHTML.parseInt + kcal[0];
    } else {
      sum.innerHTML = kcal[0];
    }
  } else {
    fotoChleb.style.display = "none";
    chlebtxt.style.textDecoration = "none";
    sum.innerHTML = "";
  }
};

const masloFunk = () => {
  if (maslo.checked) {
    fotoMaslo.style.display = "block";

    if (sum.innerHTML !== "") {
      sum.innerHTML.parseInt + kcal[1];
    } else {
      sum.innerHTML = kcal[1];
    }
  } else {
    fotoMaslo.style.display = "none";

    sum.innerHTML = "";
  }
};

chleb.addEventListener("click", chlebFunk);
maslo.addEventListener("click", masloFunk);

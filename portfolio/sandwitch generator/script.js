const kcal = [12, 15, 25, 84, 15, 46, 74, 8];
let chleb = document.querySelector("#chleb");
const fotoChleb = document.querySelector(".fot-chleb");

const show = () => {
  if (chleb.checked) {
    fotoChleb.style.display = "block";
    chlebtxt.style.textDecoration = "line-through";
    sum.innerHTML = kcal[0];
  } else {
    fotoChleb.style.display = "none";
    chlebtxt.style.textDecoration = "none";
    sum.innerHTML = "";
  }
};

chleb.addEventListener("click", show);

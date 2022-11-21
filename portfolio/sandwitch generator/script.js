let chleb = document.querySelector("#chleb");
const fotoChleb = document.querySelector(".fot-chleb");

const show = () => {
  if (chleb.checked) {
    fotoChleb.style.display = "block";
    span;
  } else {
    fotoChleb.style.display = "none";
  }
};

chleb.addEventListener("click", show);

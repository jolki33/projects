const products = [
  { id: 1, name: "Chleb", kcal: 17 },
  { id: 2, name: "Majonez", kcal: 84 },
  { id: 3, name: "Ketchup", kcal: 18 },
  { id: 4, name: "Szynka", kcal: 21 },
  { id: 5, name: "Ser żółty", kcal: 26 },
  { id: 6, name: "Pomidor", kcal: 33 },
  { id: 7, name: "Cebula", kcal: 11 },
  { id: 8, name: "Salata", kcal: 7 },
];

let template = "";
products.forEach((product) => {
  template += `
  <div class ="ingredients">
  <input type="checkbox" class="product-input" id="product-${product.id}" value="${product.kcal}">
  <label for="product-${product.id}">${product.name}</label>
  </div>
  `;
  document.querySelector(".wrapper").innerHTML = template;
});

document.querySelector(".wrapper").insertAdjacentHTML("beforeend", template);

document.querySelectorAll(".product-input").forEach((input) => {
  input.addEventListener("click", () => {
    let kcal = [];
  });
});

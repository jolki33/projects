import { renderCountriesList } from "./dom-utlis.js";

export const renderDashBoard = () => {
  const API_URL_ALL = "https://restcountries.com/v3.1/all";
  let countries;
  let query = "pol";
  let region = "";

  fetch(API_URL_ALL)
    .then((res) => res.json())
    .then((countriesRaw) => {
      countries = countriesRaw.map((country) => {
        return {
          capital: country.capital && country.capital[0],
          population: country.population.toLocaleString(),
          name: country.name.common,
          region: country.region,
          flagUrl: country.flags.png,
        };
      });
      renderCountriesList(countries);
    });

  const filterDataAndRenderCoutriesList = () => {
    const filteredCountries = countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(query) &&
        (!region || country.region === region)
      );
    });
    renderCountriesList(filteredCountries);
  };

  document.querySelector("#query").addEventListener("input", (e) => {
    // render countries based on query
    query = e.target.value.toLowerCase().trim();
    filterDataAndRenderCoutriesList();
  });

  document.querySelector("#region").addEventListener("change", (e) => {
    region = e.target.value;
    filterDataAndRenderCoutriesList();
  });
};

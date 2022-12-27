export const renderDetail = () => {
  const searchParams = new URLSearchParams(window.Location.search);
  const countryCode = searchParams.get("country");
  if (!countryCode) {
}

const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`;
fetch(API_URL_DETAIL)
.then((res) => res.json())
.then((res) => {
    
    
};

const goBackToDashboard = () => {
    window.Location.href = "/";
    
}
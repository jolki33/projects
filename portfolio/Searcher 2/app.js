import { renderDashBoard } from "./view-dashboard.js";
import { renderDetail } from "./view-details.js";

if (window.location.search.includes("?country=")) {
  renderDetail();
} else {
  document.querySelector(".filters").classList.add("active");
  renderDashBoard();
}

import { renderDashBoard } from "./view-dashboard.js";

if (window.location.search.includes("?country=")) {
  console.log("render");
} else {
  renderDashBoard();
}

import createProgressBar from "./components/progressBar/progressBar.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const progressBar = createProgressBar(200); // Límite máximo de caracteres: 200
  app.appendChild(progressBar);
});

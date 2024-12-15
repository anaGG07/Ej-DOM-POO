import createCronometro from "./components/chronometerRender/render.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const cronometro = createCronometro();
  app.appendChild(cronometro);
});

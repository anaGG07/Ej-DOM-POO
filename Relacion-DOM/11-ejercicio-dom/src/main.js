import createFileGenerator from "./components/fileGenerator/fileGenerator.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const fileGenerator = createFileGenerator();
  app.appendChild(fileGenerator);
});

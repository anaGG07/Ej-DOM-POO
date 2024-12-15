import createGeolocationComponent from "./components/geolocation/geolocation.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const geolocationComponent = createGeolocationComponent();
  app.appendChild(geolocationComponent);
});

// ----- DECLARACIÓN DE VARIABLES ---------
import { cardPrices } from "./components/cardPrice/cardPrice";
import { hourRangeSelect } from "./components/hoursRangeSelect/hourRangeSelect";
import { createButton } from "./components/loadButton/loadButton";
import {  createSpinner,  hiddenSpinner,  showSpinner,} from "./components/spinner/spinner";



// ----- DECLARACIÓN DE FUNCIONES ------

const handleClick = async () => {
  const app = document.getElementById("app"); // div#app del index.html

  // Obtener el rango seleccionado
  const selectedRange = document.getElementById("selectHours").value;

  const spinner = createSpinner(); // crear spinner
  app.appendChild(spinner); // añadir el Spinner al DOM

  // Mostrar spinner
  await showSpinner();

  // CREAR TARJETA PRECIOS
  try {
    const card = await cardPrices(selectedRange);
    app.appendChild(card);

    //Ocultar spinner
    hiddenSpinner();
  } catch (error) {
    console.error("Error al cargar los precios:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const container = document.createElement("div");
  container.id = "selectorContainer"

  const loadButton = createButton();
  const rangeHours = hourRangeSelect();

  container.appendChild(rangeHours);
  container.appendChild(loadButton);

  app.appendChild(container);

  loadButton.addEventListener("click", handleClick);
});

import { createButton } from "./components/loadButton/loadButton";
import { createSpinner } from "./components/spinner/spinner";
import { getDataPrices } from "./helpers/getDataPrices";


// ----- DECLARACIÓN DE VARIABLES------
 const hourRanges = import.meta.env.VITE_HOUR_RANGES.split(",");
 const baseUrl = import.meta.env.VITE_BASE_URL;
 const dateTimeStart = import.meta.env.VITE_DATE_TIME_START;
 const dateTimeEnd = import.meta.env.VITE_DATE_TIME_END;
 const timeTruncHour = import.meta.env.VITE_TIME_TRUNC_HOUR;
 const url = `${baseUrl}?${dateTimeStart}&${dateTimeEnd}&${timeTruncHour}`




// ----- DECLARACIÓN DE FUNCIONES ------

const handleClick = async () =>{
    const app = document.getElementById("app"); // div#app del index.html
    const spinner = createSpinner(); // crear spinner
    app.appendChild(spinner); // añadir el Spinner al DOM

    const data = await getDataPrices(url);
    console.log(data);
}


document.addEventListener("DOMContentLoaded", () =>{
    
    const app = document.getElementById("app");

    if (!app) {
        console.error("El elemento con id 'app' no se encuentra en el DOM.");
        return;
    }

    const loadButton = createButton();
    app.appendChild(loadButton);

    loadButton.addEventListener("click", handleClick);
});


import './cardPrice.css';

import { getDataPrices } from "../../helpers/getDataPrices.js";

// ----------- VARIABLES DE ENTORNO -------------
const baseUrl = import.meta.env.VITE_BASE_URL;
const dateTimeStart = import.meta.env.VITE_DATE_TIME_START;
const dateTimeEnd = import.meta.env.VITE_DATE_TIME_END;
const timeTruncHour = import.meta.env.VITE_TIME_TRUNC_HOUR;
const url = `${baseUrl}?${dateTimeStart}&${dateTimeEnd}&${timeTruncHour}`

// ----------- DECLARACION DE FUNCIONES -----------
/**
 * Crea una tarjeta con los datos de precios según el rango seleccionado
 * @param {string} rangeHour "[0-6],[6-12],[12-18],[18-24]"
 * @returns {Promise}
 */
export const cardPrices = async (rangeHour) => {
    const card = document.createElement("div");
    card.id = "cardPrices";
    card.classList.add("loadCardPrices");
    
    try {
        const data = await getDataPrices(url);

        // OBTENER INICIO Y FIN HORA
        const selectedHours = rangeHour.split("-");

        if (data.length > 0) {
            // BUSCAR LOS DATOS QUE ENCAJEN EN LA FRANJA HORARIA
            const filteredData = data.filter(({ datetime }) => {
               const date = new Date(datetime);
               const hours = date.getHours();
              return hours >= parseInt(selectedHours[0]) && hours < parseInt(selectedHours[1])
            });

           
            // GENERAR LAS FICHAS CON LOS DATOS
            if (filteredData) {
                card.innerHTML = filteredData.map(({ value, datetime }) => {
                    const date = new Date(datetime).toLocaleString();
                    const splitDate = date.split(",");
                    const hours = splitDate[1].split(":");
                    return `
                    <div id="cardContainer">
                        <p><strong>Fecha:</strong> ${splitDate[0]}</p>
                        <p><strong>Hora:</strong> ${hours[0]}:${hours[1]}h - ${Number(hours[0]) + 1}:${hours[1]}h</p>
                        <p><strong>Precio:</strong> ${value} €/MWh</p>
                    </div>
                `
                }).join("");

            } else {
                card.textContent = "No hay datos para el rango seleccionado";
            }
        } else {
            card.textContent = "No hay datos disponibles";
        }
    } catch (error) {
        card.textContent = "Error al cargar los precios";
    }

    return card;
}
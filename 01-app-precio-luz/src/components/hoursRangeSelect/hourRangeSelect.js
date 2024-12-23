import './hourRangeSelect.css';

const hourRanges = import.meta.env.VITE_HOUR_RANGES.split(",");
/**
 * @description: Crea un elemento <select> que contiene las opciones de franjas horarias
 * definidas en la variable de entorno VITE_HOUR_RANGES
 * 
 * No recibe parametros
 * @returns {HTMLSelectElement}
 */
export const hourRangeSelect = () => {
    const select = document.createElement("select");
    select.id = "selectHours";
    select.innerHTML = hourRanges
        .map(range => `<option value="${range}">Franja horaria: ${range}</option>`)
        .join("");
    return select;
};



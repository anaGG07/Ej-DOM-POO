/**
 *  Boton 
 *  - nombre: cargar precios de la luz
 *  - id = load-price-btn
 */

export const createButton = () =>{
    const button = document.createElement("button");
    
    button.id = "load-price-btn";
    button.classList.add("load-btn");
    button.textContent = "Cargar precios de la luz";

    return button;
};
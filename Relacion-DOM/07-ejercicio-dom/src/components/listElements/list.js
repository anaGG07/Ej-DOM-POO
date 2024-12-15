
//. ---- IMPORTACIONES ---- 

import createDeleteButton from "../deleteButton/deleteButton";
import createModal from "../modalConfirm/modalConfirm";


//. ---- FUNCIONES ---- 

const createList = (data) => {
    
    // Contenedor principal
    const divContainer = document.createElement("div");

    // Crear el modal
    const modal = createModal();
    document.body.appendChild(modal); // <-- Agregarlo al DOM principal

    // Elemento principal
    const ulList = document.createElement("ul");
    ulList.id ="ulListId"
    

    // Elementos de la lista
    data.forEach(({ name, price }, i) => {
        const li = document.createElement("li");
        li.id = `li${i}`;
        
        const span = document.createElement("span");
        span.id = "spanLiId";
        span.textContent = `${name} - ${price}€ `;

        // Crear el botón y pasarlo el modal como referencia
        const button = createDeleteButton(modal);

        // Adición de elementos
        li.append(span, button);
        ulList.appendChild(li);
    });



    divContainer.appendChild(ulList);

    return divContainer;
};

export default createList;
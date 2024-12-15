//. ---- IMPORTACIONES ---- 
import createModal from "../modalConfirm/modalConfirm";


//. ---- FUNCIONES ---- 

const createDeleteButton = (modal) => {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Borrar";

    //. ---- LÓGICA PARA MOSTRAR EL MODAL ----  
    deleteButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });


    return deleteButton;
};

export default createDeleteButton;
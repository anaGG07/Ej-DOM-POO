import './modalConfirm.css'


const createModal = () => {
    // Contenedor principal del modal (overlay)
    const modalOverlay = document.createElement("div");
    modalOverlay.id = "modal-overlay";
    modalOverlay.classList.add("overlay");
    modalOverlay.style.display = "none";

    // Contenedor del contenido
    const modalContainer = document.createElement("div");
    modalContainer.id = "modal-container";
    modalContainer.classList.add("modal");

    // Cabecera del modal
    modalContainer.innerHTML = `
        <div id="modal-header">
            <h2>¡Atención!</h2>
            <button class="a" data-id="btnCloseModal">X</button>
        </div>
        <div id="modal-body">
            <p id="modal-message">¿Estás seguro de que deseas eliminar este elemento?</p>
        </div>
        <div id="modal-footer">
            <button data-id="btn-acept">Aceptar</button>
            <button data-id="btn-cancel">Cancelar</button>
        </div>
    `;


    // Añadir el contenido
    modalOverlay.appendChild(modalContainer);


    //. ---- Lógica de los botones ----
    modalOverlay.addEventListener("click", (event) => {
        const target = event.target;

        if (target.dataset.id === "btnCloseModal" || target.dataset.id === "btn-cancel") {
            modalOverlay.style.display = "none"; // Ocultar modal
        } else if (target.dataset.id === "btn-acept") {
            console.log("Se ha borrado el elemento");

            // Borrar el elemento asociado si existe
            if (modalOverlay.targetElement) {
                modalOverlay.targetElement.remove(); 
            }

            modalOverlay.style.display = "none"; 
        }
    });

   
    modalOverlay.updateMessage = (message, targetElement) => {
        const messageElement = modalOverlay.querySelector("#modal-message");
        messageElement.textContent = message;

        modalOverlay.targetElement = targetElement;
    };

    return modalOverlay;
};

export default createModal;

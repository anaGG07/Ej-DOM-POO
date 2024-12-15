const addDragAndDrop = (container, onDropCallback) => {
    let draggedElement = null;
  
    // Evento al comenzar a arrastrar
    container.addEventListener("dragstart", (event) => {
      draggedElement = event.target;
      event.target.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
    });
  
    // Evento al terminar el arrastre
    container.addEventListener("dragend", (event) => {
      event.target.classList.remove("dragging");
      draggedElement = null;
    });
  
    // Evento al pasar sobre una zona de soltar
    container.addEventListener("dragover", (event) => {
      event.preventDefault(); // Necesario para permitir soltar
      event.dataTransfer.dropEffect = "move";
  
      const afterElement = getDragAfterElement(container, event.clientY);
      const dragging = container.querySelector(".dragging");
  
      if (afterElement == null) {
        container.appendChild(dragging);
      } else {
        container.insertBefore(dragging, afterElement);
      }
    });
  
    // Evento al soltar
    container.addEventListener("drop", (event) => {
      event.preventDefault();
      if (onDropCallback && typeof onDropCallback === "function") {
        onDropCallback(draggedElement, container);
      }
    });
  
    // Función para determinar la posición de inserción
    const getDragAfterElement = (container, y) => {
      const draggableElements = [...container.querySelectorAll(".liClass:not(.dragging)")];
  
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
  
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    };
  };
  
  export default addDragAndDrop;
  
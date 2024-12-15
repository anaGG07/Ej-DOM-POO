import createList from "./components/list/list";
import addDragAndDrop from "./components/dragDrop/addDragg.js"; 
import { tasks } from "./data/data";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Crear la lista
  const list = createList(tasks);
  app.appendChild(list);

  // Agregar funcionalidad de drag and drop
  addDragAndDrop(list, (draggedElement, container) => {
    console.log(`Elemento ${draggedElement.id} reordenado en ${container.id}`);
  });
});

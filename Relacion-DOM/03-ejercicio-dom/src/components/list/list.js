import "./list.css";

const createList = (data) => {
  const list = document.createElement("ul");
  list.id = "ulList";

  //. CREAR LISTA 

  data.forEach(({ id, title, status }) => {
    list.innerHTML += `
      <li id="item-${id}" class="liClass pending" draggable="true">
        ${title}
        <p class="status" data-id="${id}">${status}</p>
      </li>
    `;
  });


  //. AÑADIR EVENTOS

  list.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName === "P" && target.classList.contains("status")) {
      const status = target.textContent;

      //` CAMBIAR EL ESTADO DINÁMICAMENTE 
      const newStatus =
        status === "Pendiente"
          ? "En progreso"
          : status === "En progreso"
          ? "Completado"
          : "Pendiente";

      target.textContent = newStatus;
    }
  });

  return list;
};

export default createList;

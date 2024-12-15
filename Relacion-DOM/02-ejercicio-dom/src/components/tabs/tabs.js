import './tabs.css';

const tab = (data) => {
    const tabContainer = document.createElement("div");
    const contentContainer = document.createElement("div");
    const divContent = document.createElement("div");

    
    data.forEach(({ title, content }, i) => {
        //. PESTAÑAS
        tabContainer.innerHTML += `
            <button id="tab-${i}" class="tabButton">${title}</button>
        `;

        //. CONTENIDO
        contentContainer.innerHTML += `
            <p id="content-${i}" class="tabContent ${i === 0 ? 'active' : 'none'}">${content}</p>
        `;
    });


    //. AÑADIR LOS ELEMENTOS AL CONTENEDOR GENERAL
    divContent.appendChild(tabContainer);
    divContent.appendChild(contentContainer);


    //. OBTENER UNA LISTA CON LOS ELEMENTOS POR PESTAÑAS Y CONTENIDO 
    const tabs = tabContainer.getElementsByClassName("tabButton");
    const contents = contentContainer.getElementsByClassName("tabContent");


    //. EVENTO CLICK POR PESTAÑA 
    [...tabs].forEach((btn, i) => {
        
        btn.addEventListener("click", () => {

            const ActiveContent = contentContainer.querySelector(".tabContent.active");

            if (ActiveContent) {
                ActiveContent.classList.remove("active");
                ActiveContent.classList.add("none");
            }

            // Activar la pestaña y el contenido seleccionados
            btn.classList.add("active");
            contents[i].classList.remove("none");
            contents[i].classList.add("active");
        });
    });

    return divContent;
};

export default tab;

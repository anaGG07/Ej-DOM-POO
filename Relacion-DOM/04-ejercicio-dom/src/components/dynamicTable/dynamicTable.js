import './dynamicTable.css';


const dynamicTable = (data, headers) => {

    // Crear tabla

    const table = document.createElement("table");
    table.id = "dynamic-table";
    table.setAttribute("border", 1);

    // Crear cabecera y cuerpo
    const tHead = document.createElement("thead");
    tHead.id = "tHead";
    const tBody = document.createElement("tbody");
    tBody.id = "tBody";


    //. COPIA PARA ORDENAR  

    let currentData = [...data]; 


    //. FUNCIONES INTERNAS

    const buildTableBody = (data) => {
        
        tBody.innerHTML = "";

        data.forEach((row) => {
           
            const trTbody = document.createElement("tr");

            //' ***** Recorrer por claves, por si alguna no existe en otros objetos *****

            headers.forEach((header) => {
                // Celdas
                const td = document.createElement("td");

                // Añadir el valor a la celda o si no existe, "-"
                td.textContent = row[header] || "-";
                trTbody.appendChild(td);
            });

            
            tBody.appendChild(trTbody);
        });
    };



    //. CONSTRUIR LA CABECERA 

    const trThead = document.createElement("tr");
    tHead.appendChild(trThead);

    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = `${header}`;
        th.style.cursor = "pointer";



        //. ---- EVENTO PARA ORDENAR AL HACER CLIC ---- 
        th.addEventListener("click", () => {
            // Determinar si la tabla ya está ordenada de forma ascendente
            const isAscending = th.getAttribute("data-order") === "asc";
        
            // Alternar el atributo de ordenación
            th.setAttribute("data-order", isAscending ? "desc" : "asc");
        
            // Ordenar los datos
            currentData.sort((a, b) => {
                const valA = a[header]?.toString() || "";
                const valB = b[header]?.toString() || "";
        
                // Comparar alfabéticamente
                if (valA < valB) return isAscending ? -1 : 1;
                if (valA > valB) return isAscending ? 1 : -1;
                return 0;
            });
        
            // Reconstruir el cuerpo de la tabla
            buildTableBody(currentData);
        });
        

        // Añadir la celda de cabecera
        trThead.appendChild(th);

    });

    buildTableBody(currentData);

    // Añadir cabecera y cuerpo a la tabla
    table.appendChild(tHead);
    table.appendChild(tBody);

    return table;
};

export default dynamicTable;

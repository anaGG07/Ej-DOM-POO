import './dynamicTable.css';


const dynamicTable = (data, headers) => {

    //. CREAR TABLA 
    const table = document.createElement("table");
    table.id = "dynamic-table";
    table.setAttribute("border", 1);

    // Crear cabecera y cuerpo
    const tHead = document.createElement("thead");
    tHead.id = "tHead";
    const tBody = document.createElement("tbody");
    tBody.id = "tBody";


    //. CONSTRUIR LA CABECERA 
    const trThead = document.createElement("tr");
    tHead.appendChild(trThead);


    // Recorrer y añadir las cabeceras
    headers.forEach((header)=>{
        const th = document.createElement("th");
        th.textContent = `${header}`;
        trThead.appendChild(th);
    })


    //. CONSTRUIR EL CUERPO 
    data.forEach((row)=>{
        // Crear fila por cada objeto
        const trTbody = document.createElement("tr");
       
        // recorrer por claves, por si alguna no existe en otros objetos
        headers.forEach((header)=>{
            // añadir una nueva fila 
            tBody.appendChild(trTbody); 

            // Crear cada celda
            const td = document.createElement("td");
            
            // Añadir el valor a la celda o si no existe, "-"
            td.textContent = row[header] || "-" ;
            trTbody.appendChild(td);
        })
        
        
    });


    // Añadir cabecera y cuerpo a la tabla
    table.appendChild(tHead);
    table.appendChild(tBody);


    return table;
};


export default dynamicTable;

// DATA DE EJEMPLO

//  [
//     { name: 'Juan, age: 30, email: 'juan@example.com' },
//     { name: 'Ana, age: 30, email: 'juan@example.com' },
// ];



const dynamicTable = ({ data, headers }) =>{
    const table = document.createElement('table');
    table.id='table-data-users';
    table.style.border = 1;

    // Crear el thead (cabeceras)
    const thead = document.createElement('thead');

    // crear el tr
    const headerRow = document.createElement('tr');

   
    headers.forEach((header) => {
        // crear cada th
        const th = document.createElement('th');
        th.textContent = header;

        // si quiero que al hacer click en el header ordene la tabla
        // aqui iría la lógica de ordenación

        // añadir cada th al tr
        headerRow.appendChild(th);
        // 
    });

    thead.appendChild(headerRow); // añadir el tr al thead

    // crear el tbody
    const tbody = document.createElement('tbody');

    // limpiar la tabla
    table.innerHTML = "";

    // recorrer los datos

    data.forEach( user => {
        // crear cada tr
        const trUser = document.createElement('tr');

        // trUser.innerHTML = `
        //     <td>${user.name}</td>
        //     <td>${user.age}</td>
        //     <td>${user.email}</td>
        // `;
        

        // Si quiero utilizar un bucle para recorrer las propiedades de cada usuario

        // inyectar las tr al tbody
        tbody.appendChild(trUser);

    });

    // añadir el thhead y tbody a la tabla
    table.append(thead, tbody);
  

    return table;
}

export default dynamicTable;
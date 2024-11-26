import dynamicTable from "./components/dynamicTable/dynamicTable";
import { data } from "./data/data.js";


//. HEADERS 
const headers = Array.from(
    data.reduce((setHeaders, e) => {
        Object.keys(e).forEach((key) => setHeaders.add(key));
        return setHeaders;
    }, new Set())
);



//. CONSTRUIR LA TABLA 
document.addEventListener("DOMContentLoaded", () =>{
    const app = document.getElementById("app");

    // Llamar a la tabla
    const table = dynamicTable(data, headers );
    app.appendChild(table);
})
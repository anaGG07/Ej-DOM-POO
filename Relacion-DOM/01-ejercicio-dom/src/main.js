//. ---- IMPORTACIONES ---- 
import form from "./components/Formulario/formulario.js";
import { data } from "./data/data.js";


//. ---- CARGAR DOM ----
document.addEventListener("DOMContentLoaded", () => {

    //. ---- CARGAR APP ---- 
    const app = document.getElementById("app");

    //. ---- INSTANCIAR EL COMPONENTE ----
    const formulario = form();
    app.appendChild(formulario);
})
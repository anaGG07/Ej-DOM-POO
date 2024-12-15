import products from "./data/data.js";
import createList from "./components/listElements/list.js"
import createModal from "./components/modalConfirm/modalConfirm.js";


document.addEventListener("DOMContentLoaded", ()=>{
    const app = document.getElementById("app");

    const divContainer = createList(products);
    app.appendChild(divContainer);


})
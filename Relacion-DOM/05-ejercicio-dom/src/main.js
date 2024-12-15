import crateSearchContainer from "./components/searchInput/searchInput.js";
import products from "./data/data.js";


document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");


    const list = crateSearchContainer(products);
    app.appendChild(list);

});
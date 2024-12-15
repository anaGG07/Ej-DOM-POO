import tab from "./components/tabs/tabs.js";
import { data } from './data/data.js' 

document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");

    const divTab = tab(data);
    app.appendChild(divTab);

});
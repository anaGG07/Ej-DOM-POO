import createCart from "./components/cart/cart";
import products from "./data/data.js";

document.addEventListener("DOMContentLoaded", ()=>{

    const app = document.getElementById("app");

    const cart = createCart(products);
    app.appendChild(cart);
});
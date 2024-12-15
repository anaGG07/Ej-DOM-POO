import './iconCart.css';

const createIconCart = () => {
    const divIconCart = document.createElement("div");
    divIconCart.id = "divIconCartId";

    divIconCart.innerHTML = `
        <i id="iconCart" class="icon fa-solid fa-cart-shopping fa-xl"></i>
        <span id="cartCountId" class="cartCount">0</span>
    `;

    // Mostrar el contenido del carrito al hacer clic en el icono
    divIconCart.addEventListener("click", () => {
        const divContent = document.getElementById("divCartId");
        const listToBuy = document.getElementById("listCartId");

        if (listToBuy) {
            const buttonBack = document.createElement("button");
            buttonBack.id="btn-back";
            buttonBack.textContent = "Volver";

            const ulContent = document.getElementById("ulCart");
            ulContent.style.display = "none";
            divContent.appendChild(buttonBack); 

            buttonBack.addEventListener("click", () => {
                ulContent.style.display = "block";
                listToBuy.style.display = "none";
                buttonBack.style.display = "none";

            })
            listToBuy.style.display = "block";
            divContent.appendChild(listToBuy); 
        }
    });

    return divIconCart;
};

export default createIconCart;

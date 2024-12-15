import createIconCart from '../iconCart/iconCart';
import createListCart from '../listCart/listCart';
import './cart.css';

const createCart = (data) => {
    const divCart = document.createElement("div");
    divCart.id = "divCartId";

    const ulProducts = document.createElement("ul");
    ulProducts.id = "ulCart";

    const iconCart = createIconCart();
    const listCart = createListCart(); 

    divCart.append(iconCart);

    data.forEach(({ name, price }, i) => {
        const liProducts = document.createElement("li");
        liProducts.className = "liCart";
        liProducts.innerHTML = `
            <span id="name-${i}">${name}</span>
            <span id="price-${i}">${price}€</span>
        `;

        const buttonBuy = document.createElement("button");
        buttonBuy.id = `btn-buy-${i}`;
        buttonBuy.textContent = "Comprar";
        buttonBuy.type = "button";

        // Evento para agregar el producto al carrito
        buttonBuy.addEventListener("click", () => {
            const cartCount = document.getElementById("cartCountId");
            Number(cartCount.textContent++);

            // Agregar el producto al carrito
            const listItem = document.createElement("li");

            listItem.textContent = `${name} - ${price}€`;
            listCart.appendChild(listItem);
        });

        liProducts.appendChild(buttonBuy);
        ulProducts.appendChild(liProducts);
    });

    divCart.append(ulProducts, listCart); 
    return divCart;
};

export default createCart;

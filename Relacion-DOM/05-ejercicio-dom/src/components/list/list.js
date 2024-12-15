import "./list.css";


const createProductsList = (data) => {
    const listContainer = document.createElement("div");
    listContainer.id="listContainer";

    const productsList = document.createElement("ul");
    productsList.id = "ulProducts";

    data.forEach(({ name, price }, i) => {
        productsList.innerHTML += `
            <li id="li${i}" class="liClass">
                <span id="spanName">${name}</span>
                <span id="spanPrice">${price}€</span>
            </li>
        `; 
    });
    
    listContainer.appendChild( productsList);

    return listContainer;

}

export default createProductsList;
import './searchInput.css';
import createProductsList from '../list/list.js';



const crateSearchContainer = (data) => {
    const divSearch = document.createElement("div");
    divSearch.id = "divSearch";

    const listProducts = createProductsList(data);
    
    const inputSearch = document.createElement("input");
    inputSearch.id = "inputSearchId";
    inputSearch.type = "text";
    inputSearch.placeholder = "Busca un producto";
    
    inputSearch.addEventListener("input", (event) => {
        const inputValue = event.target.value.toLowerCase();
        const liValue = listProducts.querySelectorAll("li");

        
        liValue.forEach((li)=>{
            li.style.display = !li.textContent.toLowerCase().includes(inputValue) ? "none" : "block"
        });

    });

    divSearch.append(inputSearch, listProducts);



    return divSearch;

}

export default crateSearchContainer;
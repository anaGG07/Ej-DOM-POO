const createListCart = () => {
    const ulListCart = document.createElement("ul");
    ulListCart.id = "listCartId"; 
    ulListCart.style.display = "none";
    return ulListCart;
};

export default createListCart;

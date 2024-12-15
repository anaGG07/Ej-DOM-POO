import './formulario.css'



const form = ()=>{
    const form = document.createElement("form")
    form.innerHTML = `
        <input id="inputEmail" placeholder="Introduce tu email">
        <button id="btn-email">Enviar</button>
        <p id="errorMessage" style="color: red; display: none;">Email erróneo</p>
    `;

    const input = form.querySelector("#inputEmail");
    const errorMessage = form.querySelector("#errorMessage");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    input.addEventListener("input", ()=>{
        const inputValue = input.value;
        const value = regex.test(inputValue) ? "none" : "block"; 
        errorMessage.style.display = value;
    })

    return form;
}

export default form;
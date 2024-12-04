import './formulario.css'



const form = ()=>{
    const form = document.createElement("form")
    form.innerHTML = `
        <input id="inputEmail" placeholder="Introduce tu email">
        <button id="btn-email">Enviar</button>
    `;
    
    return form;
}

export default form;
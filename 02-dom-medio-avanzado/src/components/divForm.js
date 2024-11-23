/**
 * @description Función que crea un div con un formulario dentro
 * @param 
 * @returns {HTMLDivElement} Devuelve un div con un formulario dentro
 */
const divForm = () => {
    // Crear un contenedor para mi formulario
    const divForm = document.createElement("div");
    divForm.classList.add('form-container');
    
    // Crear form
    const formEmail = document.createElement("form");
    formEmail.classList.add('form');

    // Crear label
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email";


    formEmail.appendChild(labelEmail); // <-- Label dentro del formulario 

    // Crear input
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email'); 
    inputEmail.placeholder = "Introduce email"; // <-- es lo mismo que setAtributte, solo algunos lo tienen
    inputEmail.required = true;

    formEmail.appendChild(inputEmail); // <-- Input dentro del formulario 
    divForm.appendChild(formEmail); // <-- Formulario dentro del contenedor


    // añadir label de verificacion del email
    const pEmailChek = document.createElement('p');
    pEmailChek.id = 'email-check';
    pEmailChek.textContent = "Email no válido";
    pEmailChek.style.color = 'red';
    pEmailChek.style.display = 'none'; // <-- Ocultar el mensaje de error
    divForm.appendChild(pEmailChek); // <-- Añadir el mensaje de error al contenedor


    // Lógica de validación de email
    // Expresión regurar de validación del email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/;

    inputEmail.addEventListener("input", () => {
        // emailRegex.test(inputEmail.value) && pEmailChek.style.display = 'none' || pEmailChek.style.display = 'block';
        emailRegex.test(inputEmail.value) ? pEmailChek.style.display = 'none' : pEmailChek.style.display = 'block';
    });


    return divForm; // <-- Devuelve el div con el formulario completo

};


export default divForm; // <-- Exportar divForm
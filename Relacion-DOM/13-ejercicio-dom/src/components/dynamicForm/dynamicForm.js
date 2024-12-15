import "./dynamicForm.css";

// Crear el formulario dinámico
const createDynamicForm = (formConfig) => {
  
  //. CONTENEDOR PRINCIPAL 
  const container = document.createElement("div");
  container.id = "formContainer";


  //. FORMULARIO 

  const form = document.createElement("form");
  form.id = "dynamicForm";

  //. CONTENEDOR DE ERRORES 

  const errorContainer = document.createElement("div");
  errorContainer.id = "errorContainer";

  
  formConfig.forEach(({ type, placeholder, required }) => {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.required = required || false; 
    input.className = "formInput";

    form.appendChild(input);
  });

  
  //. BOTÓN DE ENVÍO 
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Enviar";
  submitButton.id = "submitButton";



  //. VALIDACIÓN DEL FORMULARIO 

  const validateForm = (event) => {
    event.preventDefault(); // <-- Evitar que se refresque 
    errorContainer.innerHTML = ""; 

    let hasErrors = false;

    //. VALIDAR CAMPOS 
    form.querySelectorAll(".formInput").forEach((input) => {
      if (input.required && !input.value.trim()) {
        hasErrors = true;
        const errorMessage = document.createElement("p");
        errorMessage.className = "errorMessage";
        errorMessage.textContent = `El campo "${input.placeholder}" es obligatorio.`;
        errorContainer.appendChild(errorMessage);
      } else if (input.type === "email" && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          hasErrors = true;
          const errorMessage = document.createElement("p");
          errorMessage.className = "errorMessage";
          errorMessage.textContent = `El campo "${input.placeholder}" debe ser un correo válido.`;
          errorContainer.appendChild(errorMessage);
        }
      }
    });

    
    if (!hasErrors) {
      alert("Formulario enviado con éxito");
      form.reset(); // <--  Reiniciar formulario
    }
  };


  form.addEventListener("submit", validateForm);

  container.appendChild(errorContainer);
  container.appendChild(form);
  form.appendChild(submitButton);

  return container;
};

export default createDynamicForm;

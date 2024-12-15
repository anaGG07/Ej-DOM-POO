import createDynamicForm from "./components/dynamicForm/dynamicForm.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Configuración de campos del formulario
  const formConfig = [
    { type: "text", placeholder: "Nombre", required: true },
    { type: "email", placeholder: "Correo Electrónico", required: true },
    { type: "number", placeholder: "Edad", required: false },
    { type: "password", placeholder: "Contraseña", required: true },
  ];

  // Crear y agregar el formulario al DOM
  const dynamicForm = createDynamicForm(formConfig);
  app.appendChild(dynamicForm);
});

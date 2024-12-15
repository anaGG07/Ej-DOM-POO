import "./fileGenerator.css";

// Crear el componente para generar el archivo
const createFileGenerator = () => {

  //. CONTENEDOR PRINCIPAL 
  const container = document.createElement("div");
  container.id = "fileGeneratorContainer";



  //. FORMULARIO 

  const form = document.createElement("form");
  form.id = "fileForm";


  //. CAMPOS DE ENTRADA 

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Nombre";
  nameInput.id = "nameInput";

  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.placeholder = "Dirección";
  addressInput.id = "addressInput";


  //. BOTÓN 
  const generateButton = document.createElement("button");
  generateButton.type = "button";
  generateButton.id = "generateButton";
  generateButton.textContent = "Generar Archivo";

  
  //. FUNCIONES PARA GENERAR Y DESCARGAR ARCHIVOS 

  const generateFile = () => {
    const name = nameInput.value.trim();
    const address = addressInput.value.trim();

    if (!name || !address) {
      alert("Por favor, complete ambos campos.");
      return;
    }

    const content = `Nombre: ${name}\nDirección: ${address}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "datos.txt";
    a.click();

    URL.revokeObjectURL(url); // Liberar el objeto URL
  };


  
  generateButton.addEventListener("click", generateFile);

 
  form.appendChild(nameInput);
  form.appendChild(addressInput);
  form.appendChild(generateButton);
  container.appendChild(form);

  
  return container;
};

export default createFileGenerator;

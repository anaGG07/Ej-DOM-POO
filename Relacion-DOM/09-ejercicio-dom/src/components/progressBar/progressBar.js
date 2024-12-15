import "./progressBar.css";

const createProgressBar = (maxChars) => {
  
  //. CONTENEDOR PRINCIPAL 
  const container = document.createElement("div");
  container.id = "progressBarContainer";

  

  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.id = "textInput";
  inputField.maxLength = maxChars;
  inputField.placeholder = `Introduce hasta ${maxChars} caracteres`;



  //. BARRA DE PROGRESO 
  const progressBar = document.createElement("div");
  progressBar.id = "progressBar";

  const progressFill = document.createElement("div");
  progressFill.id = "progressFill";
  progressBar.appendChild(progressFill);



  //. CONTENEDOR DE CARACTERES 
  const counter = document.createElement("p");
  counter.id = "charCounter";
  counter.textContent = `Caracteres restantes: ${maxChars}`;



  //. ACTUALIZAR 
  const updateProgress = () => {
    const currentLength = inputField.value.length;
    const remaining = maxChars - currentLength;
    const percentage = (currentLength / maxChars) * 100;
    
    progressFill.style.width = `${percentage}%`;
    counter.textContent = `Caracteres restantes: ${remaining}`;
  };



  inputField.addEventListener("input", updateProgress);
  

  container.appendChild(inputField);
  container.appendChild(progressBar);
  container.appendChild(counter);

  return container;
};

export default createProgressBar;

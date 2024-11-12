// Selección de elementos del DOM
const appDiv = document.getElementById('app');

// Propiedades de los elementos
appDiv.innerText = "Hola Mundo"; // texto plano
appDiv.innerHTML= "<h1>Hola Mundo</h1>"; //  interpreta código HTML


// Añadir clases a un elemento
appDiv.classList.add("clase1");

// Selección de ClassName
const items = document.getElementsByClassName("items");
items.length; // 5


let n = 0;
for(const i of items){
   // i.textContent = `Hola amigo ${++n}` // imprime toda la etiqueta
    i.textText = `Hola amigo ${++n}` // imprime el contenido
}


// Selección por clase
const saludoP = document.querySelector(".saludo")

// Seleccionar todos por clase
const saludoPAll = document.querySelectorAll(".saludo")

saludoPAll.forEach((saludo, index)=>{
    saludo.innerText = `Hola Mundo ${index}`
})

// atributos en etiquetas
const miGit = document.getElementById('gitHub');
miGit.setAttribute("target", "_blanck");
// miGit.removeAttribute("target");
// miGit.innerText = "Ir a mi gitHub";
// miGit.textContent = "Ir a mi gitHub";


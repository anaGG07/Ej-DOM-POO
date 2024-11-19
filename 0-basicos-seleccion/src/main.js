//? RELACIÓN 1

// ### Ejercicio 1:
// Selecciona el elemento `h1` por su ID.

const elementH1 = document
  .getElementById("contenedorPrincipal")
  .querySelector("h1");
console.log(elementH1);
elementH1.style.color = "red"; // <-- aplicar estilo en linea
elementH1.textContent = "Hola Mundo"; // <-- contenido del elemento

// ### Ejercicio 2:
// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorPrincipal`.
const elementP = document.querySelectorAll("#contenedorPrincipal .parrafo");
console.log(elementP);

// ### Ejercicio 3:
// Selecciona el elemento `img` por su atributo `src`.
const elementImg = document.querySelector("img[src='imagen.png']");
console.log(elementImg);

// ### Ejercicio 4:
// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.
const elementSpan = document.querySelectorAll("#contenedorSecundario span");
console.log(elementSpan);

// ### Ejercicio 5:
// Selecciona el primer párrafo con la clase "importante".
const elementPImportant = document.querySelector(".parrafo.importante");
console.log(elementPImportant);

// ### Ejercicio 6:
// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
const elementAllP = document.querySelectorAll("#contenedorPrincipal p");
console.log(elementAllP);

// ### Ejercicio 7:
// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
const elementAllAtribute = document.querySelectorAll(
  "[data-atributo='valor1']"
);
console.log(elementAllAtribute);

// ### Ejercicio 8:
// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
const elements2Important = document.querySelectorAll(".parrafo.importante");
(elements2Important.length > 1 && console.log(elements2Important[1])) || null;

// ### Ejercicio 9:
// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".
const elementsSpan = document.querySelectorAll(".contenedor span");
console.log(elementSpan);

// ### Ejercicio 10:
// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
const elements3Important = document.querySelectorAll(
  "#contenedorPrincipal .parrafo"
);
(elements3Important.length > 2 && console.log(elements3Important[2])) ||
  console.log("No hay 3");



//? RELACIÓN 2
// # Relación II de básicos selección.

// ### Ejercicio 1:
// Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`.
//Cuando se haga clic, cambia el color de fondo del elemento al azar.


const allSpan = document.querySelectorAll("#contenedorSecundario span");
allSpan.forEach((span) => {
  span.onclick = function () {
    this.style.backgroundColor = "red";
  };
});


// ### Ejercicio 2:
// Crea una función que muestre una alerta con el contenido
// de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.

const allParag = document.querySelectorAll(".parrafo");

allParag.forEach((paragraph) => {
  paragraph.addEventListener("dblclick", () => {
    alert(paragraph.textContent);
  });
});



// ### Ejercicio 3:
// Añade un evento de cambio a un `<select>` que está fuera del `contenedorPrincipal`.
// Cuando se cambie el valor, actualiza el texto del elemento `h1` al nuevo valor seleccionado.



// ### Ejercicio 4:
// Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario`
// cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").


const paragraphs = document.querySelectorAll("#contenedorSecundario p");

document.addEventListener("keydown", (event) => {
  
  if (event.key === "Enter") {
    paragraphs.forEach((paragraph) => {
      paragraph.textContent = "Nuevo contenido";
    });
  }
});


// ### Ejercicio 5:
// Añade un evento de clic a cualquier elemento con la clase "etiqueta". 
// Cuando se haga clic, elimina el elemento del DOM.


const etiquetas = document.querySelectorAll(".etiqueta");

etiquetas.forEach(etiqueta => {
  etiqueta.addEventListener("click", () => {
    etiqueta.remove();
  });
});
  

// ### Ejercicio 6:
// Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` 
// cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.


const spans = document.querySelectorAll("#contenedorSecundario span");

spans.forEach(span => {
  span.addEventListener("mouseover", () => {
    span.style.color = "blue";
  });
});


// ### Ejercicio 7:
// Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta 
// con el texto "Página cargada".

window.addEventListener("load", () => {
    alert("Página cargada");
  });
  

// ### Ejercicio 8:
// Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` 
// cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.


const image = document.querySelector("#contenedorPrincipal img");
const allParagraphs = document.querySelectorAll("#contenedorPrincipal p");


image.addEventListener("click", () => {

  allParagraphs.forEach(paragraph => {

    const oldSize = window.getComputedStyle(paragraph).fontSize;
    const newSize = parseFloat(oldSize) * 2 + "px";
    paragraph.style.fontSize = newSize;

  });
});

  
// ### Ejercicio 9:
// Añade un evento de teclado a la página. Cuando se presione cualquier tecla, 
// muestra una alerta con el código de la tecla presionada.

document.addEventListener('keydown', (event) => {
    alert(`Has presionado la tecla: ${event.key} (Código: ${event.code})`);
});


// ### Ejercicio 10:
// Crea una función que cambie el color de fondo del `contenedorPrincipal` 
//cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.

const contenedorPrincipal = document.getElementById('contenedorPrincipal');

contenedorPrincipal.addEventListener('click', () => {
    contenedorPrincipal.style.backgroundColor = 'green';
});

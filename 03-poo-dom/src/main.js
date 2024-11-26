//. ------ IMPORTACIONES ------
import { Producto } from "./components/Productos/Producto.js";
import { ProductoFFabrica } from "./components/Productos/ProductoFFabrica.js";

//. ---- OBTENER CONTENEDOR PRINCIPAL ----
const app = document.getElementById("app");

// Estructura inicial para app
app.innerHTML = `
  <h2>Gestión de productos</h2>
  <ul id="ulProducts"></ul>
`;

// Crear array de productos (lista)
const listProducts = [];

// Crear ul donde añadir los li
const ul = document.getElementById("ulProducts");

//. ---- CREAR PRODUCTOS ----
for (let i = 0; i < 10; i++) {

  // INSTANCIA CON CLASE 
  //const producto = new Producto(`Producto${i}`, 20 + i, 5 + i, `linkImagen${i}`);

  // INSTANCIA CON FABRICA
  const producto = ProductoFFabrica(`Producto${i}`, 20 + i, 5 + i, `linkImagen${i}`);
  
  listProducts.push(producto);

  // Crear nuevo li para cada producto
  const li = document.createElement("li");
  li.id = `li${i}`;
  li.innerHTML = generarHTMLProducto(producto, i); // <--- Generar el HTML reutilizable
  ul.appendChild(li);

  // Crear el click
  document.getElementById(`btn-stock-${i}`).addEventListener("click", () => {
    verFormulario(i);
  });
}

/**
 * @description Genera el HTML inicial para un producto en la lista
 * @param {Producto} producto 
 * @param {number} index 
 * @returns {string}
 */
function generarHTMLProducto(producto, index) {
  return `
    ${producto.getInfo()}
    <button type="button" id="btn-stock-${index}">Actualizar stock</button>
  `;
}

/**
 * @description Muestra el formulario para actualizar el stock de un producto
 * @param {number} index 
 */
function verFormulario(index) {
  const li = document.getElementById(`li${index}`);

  // Crear el formulario dentro del <li>
  li.innerHTML = `
    ${listProducts[index].getInfo()}
    <select id="select-option-${index}">
      <option value="0">Añadir stock</option>
      <option value="1">Restar stock</option>
    </select>
    <input type="number" id="input-cantidad-${index}" placeholder="Cantidad" min="1" />
    <button type="button" id="btn-confirm-${index}">Confirmar</button>
  `;

  // Asignar evento al botón "Confirmar" para actualizar directamente usando el modelo
  document.getElementById(`btn-confirm-${index}`).addEventListener("click", () => {
    const option = parseInt(document.getElementById(`select-option-${index}`).value);
    const cantidad = parseInt(document.getElementById(`input-cantidad-${index}`).value);

    
    // Actualizar el stock
    const producto = listProducts[index];
    producto.updateStock(option, cantidad);

    // Actualizar el contenido del <li> 
    li.innerHTML = generarHTMLProducto(producto, index);

    // Reasignar el evento
    document.getElementById(`btn-stock-${index}`).addEventListener("click", () => {
      verFormulario(index);
    });

    console.log(producto); // Verificar producto actualizado en consola
  });
}

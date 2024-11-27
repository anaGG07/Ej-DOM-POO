//. ------ IMPORTACIONES ------
import { CuentaBancaria } from "./components/CBancaria/CuentaBancaria.js";
import { CuentaBancariaFConstructora } from "./components/CBancaria/CuentaBancariaFConstructora.js";
import './public/style.css'
//import { CuentaBancariaFConstructora } from "./components/CBancaria/CuentaBancariaFConstructora.js";

//. ---- OBTENER CONTENEDOR PRINCIPAL ----
const app = document.getElementById("app");

// Crear instancia de clase
//const cuenta = new CuentaBancaria(1232, "ana", 100);
const cuenta = new CuentaBancariaFConstructora(1232, "ana", 100);

// Añadir estructura al DOM
app.innerHTML = `
  <div id="div-show">
    <label for="select-show">¿Que quieres hacer?</label>
    <select id="select-show">
      <option value="" disabled selected>Elige una opción</option>
      <option value="0">Ver información</option>
      <option value="movimiento">Realizar operación</option>
    </select>
    <button id="btn-show" type="submit">Aceptar</button>
  </div>

  <div id="div-operaciones" >
    <label for="opt">¿Que operación quieres realizar?</label>
    <select id="opt" name="opciones">
      <option value="" disabled selected>Elige una opción</option>
      <option value="1">Ingresar cantidad</option>
      <option value="2">Retirar cantidad</option>
    </select>
    <button id="btn-opt" type="submit">Aceptar</button>
  </div>

  <div id="div-info">
    <h2>Información de la cuenta:</h2>
    <p>${cuenta.getInfo()}</p>
  </div>
`;

//. OCULTAR BLOQUES POR DEFECTO 
mostrarOpcion();


//. CAPTURAR EVENTOS 

// Primer evento: mostrar opciones "ver" y "operaciones"
document.getElementById("btn-show")
        .addEventListener("click", () =>{
          const optSelected = document.getElementById("select-show");
          mostrarOpcion(optSelected.value);
        });

// Segundo evento: mostrar opciones "ingresar" y "retirar"
document.getElementById("btn-opt")
        .addEventListener("click", () =>{
          const optSelected = document.getElementById("opt");
          mostrarForm(optSelected.value);
        });


//. ----- FUNCIONES ----- 

/**
 * @description Habilita o deshabilita los bloques seleccionados
 * @param {String} opt 
 */
function mostrarOpcion(opt){
  switch (opt) {
    case "0":
      document.getElementById("div-info").classList.remove("hidden")
      document.getElementById("div-operaciones").classList.add("hidden")
      break;

    case "movimiento":
      document.getElementById("div-info").classList.add("hidden")
      document.getElementById("div-operaciones").classList.remove("hidden")
      break;
  
    default:
      document.getElementById("div-info").classList.add("hidden")
      document.getElementById("div-operaciones").classList.add("hidden")

      break;
  }
};


/**
 * @description Muestra la casilla para introducir la cantidad y llama a la función para operaciones
 * @param {String} opt 
 */
function mostrarForm(opt){
  const container = document.getElementById("div-operaciones");

  const numCuentaValue = `
  <input id="idNumCuenta" type"number" placeholder="Introduce numero de cuenta">
  <button id="btn-confirmarNum" type="submit">Confirmar</button>
  `;
  
  container.innerHTML = numCuentaValue;
  document.getElementById("btn-confirmarNum")
          .addEventListener("click", ()=>{
            const num = document.getElementById("idNumCuenta").value;

            if(Number(num) === cuenta.numCuenta){
              const formOpt = `
              <input id="idInput" type"number" placeholder="Introduce cantidad">
              <button id="btn-confirmar" type="submit">Confirmar</button>
              <p id="mensaje"></p>
              `;
              container.innerHTML = formOpt;
              
              document.getElementById("btn-confirmar")
                      .addEventListener("click", ()=>{
                        let cantidad = document.getElementById("idInput").value;
                        const mensaje = cuenta.realizarMovimiento(String(opt), cuenta.numCuenta,  Number(cantidad));
                        document.getElementById("mensaje").innerHTML = mensaje;
                      })
            } else {
              container.innerHTML = `
              <p>El numero de cuenta introducido no existe</p>
              `;
             mostrarForm(opt);
            }
          });
  
  
}


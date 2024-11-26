import { Usuario } from "./components/Usuario/Usuario";
import { UsuarioClases } from "./components/Usuario/UsuarioClases";
import { UsuarioFFabrica } from "./components/Usuario/UsuarioFFabrica";

// Crear instancia de Usuario
//const usuario = new Usuario("ana", "xx@ejemplo.com", "1234");
//const usuario = new UsuarioClases("a", "aa@gg.com", "123");
const usuario = UsuarioFFabrica("a", "aa@gg.com", "123");

const app = document.getElementById("app");

app.innerHTML = `
  <h2>Gestión de usuarios</h2>
  <p>${usuario.getInfo()}</p>
  <button id="btn-login"> Iniciar Sesión</button>
  <button id="btn-act-email"> Actualizar Email</button>

  <div id="form-container"></div>
`;

document.getElementById("btn-login")
        .addEventListener("click", mostrarFormularioLogin);

document.querySelector("#btn-act-email")
        .addEventListener("click", mostrarFormularioUpdateEmail);

function mostrarFormularioLogin(){
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `
    <input id="email-login" type="email" placeholder="Introduce el email"/>
    <input id="password-login" type="password" placeholder="Introduce la contraseña"/>
    <button id="btn-enviar">Enviar</button>
  `;

  document.getElementById("btn-enviar")
        .addEventListener("click", ()=>{
          const email = document.getElementById("email-login").value.trim();
          const pass = document.getElementById("password-login").value.trim();
          alert(usuario.login(email, pass));
        });
}


function mostrarFormularioUpdateEmail() {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `
    <input id="update-email" type="email" placeholder="Introduce el nuevo email"/>
    <button id="btn-actualizar">Actualizar</button>
  `;
  document.querySelector("#btn-actualizar")
        .addEventListener("click", ()=>{
          const newEmail = document.getElementById("update-email").value.trim();
          alert(usuario.updateEmail(newEmail));
        });
}



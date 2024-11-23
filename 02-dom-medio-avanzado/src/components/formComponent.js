//Inicio de sesión

export default function fromComponent(){
    const divFormLogin = document.createElement('div');
    divFormLogin.classList.add('form-container-login');
    divFormLogin.id = 'form-container-login';

    // Crear el formulario
    const formEmail = document.createElement('form');
    formEmail.id = 'form-login';
    formEmail.type = 'email';
    formEmail.placeholder = 'Correo electrónico';
    formEmail.required = true;

    // Label  username
    const labelUsername = document.createElement('label');
    labelEmail.textContent = 'Username';
   
    // Input username
    const inputUsername = document.createElement('input');
    inputUsername.id = 'username';
    inputUsername.type = 'text';
    inputUsername.name = 'Username';
    inputUsername.placeholder = 'Username';
    inputUsername.required = true;


    // Input password
    const labelPassword = document.createElement('label');
    labelPassword.type = 'password';
    labelPassword.type = 'password';
    labelPassword.name = 'password';
    labelPassword.placeholder = 'Password';
    labelPassword.textContent = 'Contraseña';


    // Boton
    const buttonLogin = document.createElement('button');
    buttonLogin.type ='submit';
    buttonLogin.textContent = 'Iniciar sesión';

    // Añadir TODOS los elementos al formulario
    formEmail.append(labelUsername, inputUsername, labelPassword, inputPassword, buttonLogin);
    divFormLogin.appendChild(formEmail);

    // Devolver el formulario
    return divFormLogin;
}
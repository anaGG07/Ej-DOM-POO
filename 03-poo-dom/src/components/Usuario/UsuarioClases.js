
export class UsuarioClases{
    #password; // propiedad privada
    
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.#password = password;
    }

    
    //. MÉTODOS PÚBLICOS 

    // Comprobar email y pass
    login(emailIntroducido, passwordIntroducido){
        // comprobar el email y password
        if(this.email === emailIntroducido && this.#password === passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales"
    };

    //actualizar email
    updateEmail(newEmail){
        this.email = newEmail;
        return `Email actualizado a: ${this.email}`
    };

    // obtener toda la informacion del usuario
    getInfo(){
        return `Usuario: ${this.nombre} - Email: ${this.email}`
    }

}
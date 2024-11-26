
export function Usuario(nombre, email, password){
    
    this.nombre = nombre;
    
    this.email = email;
    
    let _password = password; // Variables privadas


    //. MÉTODOS PÚBLICOS 

    this.login = function(emailIntroducido, passwordIntroducido){
        // comprobar el email y password
        if(this.email === emailIntroducido && _password === passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        }
        return "Error en las credenciales"
    };

    this.updateEmail = function(newEmail){
        this.email = newEmail;
        return `Email actualizado a: ${this.email}`
    };

    // obtener toda la informacion del usuario
    this.getInfo = function(){
        return `Usuario: ${this.nombre} - Email: ${this.email}`
    }


};




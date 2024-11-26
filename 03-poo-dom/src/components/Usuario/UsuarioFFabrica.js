export function UsuarioFFabrica(nombreA, emailA, password) {
  let _password = password;
  return {
    nombre: nombreA,
    email: emailA,
    // Comprobar email y pass
    login(emailIntroducido, passwordIntroducido) {
      // comprobar el email y password
      if (
        this.email === emailIntroducido &&
        _password === passwordIntroducido
      ) {
        return `Bienvenido ${this.nombre}`;
      }
      return "Error en las credenciales";
    },
    //actualizar email
    updateEmail(newEmail) {
      this.email = newEmail;
      return `Email actualizado a: ${this.email}`;
    },
    // obtener toda la informacion del usuario
    getInfo() {
      return `Usuario: ${this.nombre} - Email: ${this.email}`;
    },
  };
}

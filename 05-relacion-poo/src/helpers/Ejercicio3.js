export function Empleado(nombre, edad, puesto){

    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;


    // Salario compartido para toda la clase
    Empleado.prototype.calcularSalario = function () {
        const salarioBase =  {
            junior : 1500,
            senior : 2500,
            master : 5000
        };

        return salarioBase[this.puesto] || 0;
    };

    Empleado.prototype.info = function (){
        console.log(`
            ${this.nombre} (${this.edad}) - ${this.puesto}) - ${this.puesto} - ${this.calcularSalario()}€
            `);
    };
}

// Subfuncion constructora llamada EmpleadoFreelance

export function EmpleadoFreelance(nombre, edad, precioHora){
    Empleado.call(this, nombre, edad, "freelance");

    // Propiedades que tiene la subclase, diferentes al padre.
    this.precioHora = precioHora;

    // Heredar las propiedades de la función constructora padre.
    EmpleadoFreelance.prototype = Object.create(Empleado.prototype);

    // Constructor del padre
    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;


    // Sobreescribir el metodo calcularSalario e info
    EmpleadoFreelance.prototype.info = function (){
        
    }
    
    EmpleadoFreelance.prototype.calcularSalario = function (){
        
    }

}

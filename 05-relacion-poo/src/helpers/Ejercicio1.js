export function Tarea(nombre) {

    //. Propiedades estáticas 
    
    Tarea.contador = 1;
    
    //. Propiedades privadas 


    //. Propiedades publicas 
    this.id = Tarea.contador++;
    this.nombre = nombre;
    this.completada = false;
    this.toggleCompletada = function (){
        this.completada = !this.completada;
    }


    // metodo privado
    function logEstado(){
        console.log(`La tarea ${this.nombre} está: ${this.completada ? "Completada" : "Pendiente"}`);
    };

    // Crear un metodo estatico del objeto que lo tengan todas las instancias
    Tarea.prototype.info = function () {
        console.log(`
            La tarea ${this.nombre} está: ${this.completada ? "Completada" : "Pendiente"}
            `);
    }
}


export class TareaClass{
    // Variables de clase
    static contador = 1;

    // Propiedad privada
    #completada;

    // constructor
    constructor(nombre){
        this.id = TareaClass.contador++;
        this.nombre = nombre;
        this.#completada = false;
    }

    // Métodos públicos
    toggleCompletada(){
        this.completada = !this.completada;
    }

    info(){
        console.log(`
            La tarea ${this.nombre} está: ${this.completada ? "Completada" : "Pendiente"}
            `);
    }


}
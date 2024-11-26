export class CuentaBancaria{

    // Propiedades privadas
    #saldo 
    

    // Constructor
    constructor(numCuenta, usuario, saldo){
        this.numCuenta = numCuenta;
        this.usuario = usuario
        this.#saldo = saldo;
    }


    //. MÉTODOS 

    /**
     * 
     * @returns {String}
     */
    getInfo(){
        return `
            Numero de cuenta: ${this.numCuenta} <br>
            Usuario: ${this.usuario} <br>
            Saldo actual: ${this.#saldo} <br>
        `
    }


    /**
     * @description Función que permite realizar movimientos de ingreso/retirada en la cuenta
     * @param {number} opt 
     * @param {number} numCuenta 
     * @param {number} cantidad 
     * @returns {String}
    */
    realizarMovimiento(opt, numCuenta, cantidad){
        // opt (0-1-2), 0 -> ver info, 1 -> añadir cantidad, 2 -> retirar cantidad
        if(this.numCuenta !== numCuenta && cantidad < 0){
            return "Los datos introducidos no son correctos"
        }

        let mensaje = "";
        switch(opt){
            
            case "1": {
                this.#saldo += cantidad; 
                mensaje = `Cantidad actualizada. <br> El saldo actual es: ${this.#saldo}`;
                break;
            }

            case "2": {
                if(this.#saldo < cantidad){
                    mensaje = `Error al retirar ${cantidad}. <br> Saldo insuficiente: ${this.#saldo} `;
                } else {
                    this.#saldo -= cantidad;
                    mensaje = `Cantidad actualizada. <br> El saldo actual es: ${this.#saldo}`;
                }
                break;

            }

            default: "No se ha seleccionado una opción correcta"
            break;

        }

        
        return mensaje;
    }
}
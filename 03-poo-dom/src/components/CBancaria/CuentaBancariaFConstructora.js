export function CuentaBancariaFConstructora(numCuenta, usuario, saldo){

    // Propiedades públicas
    this.numCuenta = numCuenta;
    this.usuario = usuario;

    // Propiedades privadas
    this._saldo = saldo;


    //. MÉTODOS 

    /**
     * @description Devuelve la información de la cuenta
     * @returns {String}
     */
    this.getInfo = function(){
        return `
            Numero de cuenta: ${this.numCuenta} <br>
            Usuario: ${this.usuario} <br>
            Saldo actual: ${this._saldo} <br>
        `
    }


    /**
     * @description Función que permite realizar movimientos de ingreso/retirada en la cuenta
     * @param {number} opt 
     * @param {number} numCuenta 
     * @param {number} cantidad 
     * @returns {String}
    */
    this.realizarMovimiento = function(opt, numCuenta, cantidad){
        // opt (0-1-2), 0 -> ver info, 1 -> añadir cantidad, 2 -> retirar cantidad
        if(this.numCuenta !== numCuenta && cantidad < 0){
            return "Los datos introducidos no son correctos"
        }

        let mensaje = "";
        switch(opt){
            
            case "1": {
                this._saldo += cantidad; 
                mensaje = `Cantidad actualizada. <br> El saldo actual es: ${this._saldo}`;
                break;
            }

            case "2": {
                if(this._saldo < cantidad){
                    mensaje = `Error al retirar ${cantidad}. <br> Saldo insuficiente: ${this._saldo} `;
                } else {
                    this._saldo -= cantidad;
                    mensaje = `Cantidad actualizada. <br> El saldo actual es: ${this._saldo}`;
                }
                break;

            }

            default: "No se ha seleccionado una opción correcta"
            break;

        }

        
        return mensaje;
    }
}
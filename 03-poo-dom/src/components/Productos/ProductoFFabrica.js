//. CONSTRUCTOR

export function ProductoFFabrica(nombre, precio, stock, img) {
  return {
    nombre,
    precio,
    stock,
    img,

    //. MÉTODOS PÚBLICOS

    // obtener toda la informacion del producto
    getInfo() {
      return `Producto: ${this.nombre} - Precio: ${this.precio} - Stock: ${this.stock} - Imagen: ${this.img}`;
    },

    //actualizar stock (opt = 0 -> sumar, opt = 1 -> restar)
    updateStock(opt, cantidad) {
      if (typeof cantidad !== "number" || isNaN(cantidad) || cantidad <= 0) {
        return (
          alert("La cantidad debe ser un número válido y mayor que cero") ||
          `Stock actual: ${this.stock}`
        );
      }

      opt === 0
        ? (this.stock += cantidad) // Sumar stock
        : opt === 1 && this.stock >= cantidad
        ? (this.stock -= cantidad) // Restar stock si hay suficiente
        : alert(
            opt === 1
              ? `Stock insuficiente ${this.stock}`
              : "La opción no es valida"
          );

      return `Stock actualizado: ${this.stock}`;
    },

  };
  
}

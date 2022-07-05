const carrito = []

// Definir un producto
const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 400
}

carrito.push(producto)


const producto2 = {
    nombre: "Teclado",
    precio: 69
}

carrito.unshift(producto2)

let resultado

//Realiza una copia del arreglo del arreglo (carrito) y pasa sus valores al array (resultado)
resultado = [...carrito, producto]

// Agrega el producto2 al final del arreglo
resultado = [...resultado, producto2]
// Agregar el producto2 al inicio del arreglo
resultado = [producto2, ...resultado]



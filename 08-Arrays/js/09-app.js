const carrito = [
    { nombre: 'Monitor de 24 pulgadas', precio: 756 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} -Precio: ${carrito[i].precio}`)
    
}

carrito.forEach(producto => {
    console.log(`${carrito[i].nombre} -Precio: ${carrito[i].precio}`)
});
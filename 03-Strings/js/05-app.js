const producto = "Monitor 20 Pulgadas";

// Remplazar
console.log(producto.replace("Pulgadas", "Centimetros"));
console.log(producto.replace("Monitor", "Monitor curvo"));

// .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));

// Alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = "Urbano";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));

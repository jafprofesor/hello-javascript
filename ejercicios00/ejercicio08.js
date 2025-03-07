let carrito = [
  { nombre: "Teclado", precio: 30 },
  { nombre: "Ratón", precio: 25 },
  { nombre: "USB", precio: 15 },
];

// Vamos a hacerlo con for
function calcularTotal(carrito) {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  return total;
}

function calcularconforof(carrito) {
  let total = 0;
  for (let producto of carrito) {
    total += producto.precio;
  }
  return total;
}

// Ahora vamos a eliminar un producto
function eliminarProducto(carrito, nombreProducto) {
  let nuevoCarrito = [];
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre !== nombreProducto) {
      nuevoCarrito.push(carrito[i]);
    }
  }
  return nuevoCarrito;
}

console.log("Total con for:", total);

function calcularTotal(carrito) {
  // Calculamos el total sumando los precios de los productos en el carrito
  return carrito.reduce((total, producto) => total + producto.precio, 0);
}

function eliminarProducto(carrito, nombreProducto) {
  // Filtramos los productos para excluir el que queremos eliminar
  return carrito.filter((producto) => producto.nombre !== nombreProducto);
}

console.log("Total antes de eliminar:", calcularTotal(carrito));
carrito = eliminarProducto(carrito, "Ratón"); // Eliminamos el producto "Ratón"
console.log("Total después de eliminar:", calcularTotal(carrito));

const productos = [
  { nombre: "Teclado", precio: 30 },
  { nombre: "Ratón", precio: 25 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "USB", precio: 15 },
];

// Vamos a hacerlo con for y con if
function filtrarProductosFor(productos, precioMaximo) {
  const productosFiltrados = [];
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio < precioMaximo) {
      productosFiltrados.push(productos[i]);
    }
  }
  return productosFiltrados;
}

function filtrarProductos(productos, precioMaximo) {
  // Filtramos solo los productos con precio menor al valor dado
  return productos.filter((producto) => producto.precio < precioMaximo);
}

console.log(filtrarProductos(productos, 50)); // Mostrará solo los productos con precio < 50€

const stock = new Map([
  ["Teclado", 10],
  ["Ratón", 5],
  ["Monitor", 3],
]);

function verificarStock(producto) {
  return stock.has(producto)
    ? `Stock disponible: ${stock.get(producto)}`
    : "Producto no encontrado";
}

console.log(verificarStock("Teclado")); // "Stock disponible: 10"
console.log(verificarStock("Impresora")); // "Producto no encontrado"

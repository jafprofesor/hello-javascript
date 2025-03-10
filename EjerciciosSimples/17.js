let productos = new Map([
  ["Manzana", 1.2],
  ["Plátano", 0.8],
  ["Cereza", 2.5],
]);

productos.forEach((precio, producto) => {
  console.log(`${producto}: ${precio}€`);
});
// Manzana: 1.2€
// Plátano: 0.8€

// sin función flecha
productos.forEach(function (precio, producto) {
  console.log(`${producto}: ${precio}€`);
});

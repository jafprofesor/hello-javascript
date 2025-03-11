function formatearPrecio(precio) {
  return precio.toFixed(2) + "€"; // Formatea con dos decimales y añade el símbolo €
}

console.log(formatearPrecio(25)); // "25.00€"
console.log(formatearPrecio(9.5)); // "9.50€"

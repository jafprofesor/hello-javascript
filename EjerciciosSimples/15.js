let numeros = [4, 3, 5, 4, 5, 1, 2, 6, 9, 5];
numeros.sort((a, b) => a - b); // Orden ascendente

console.log(numeros); // [1, 2, 5, 6, 9]

// Sin función flecha
numeros.sort(function (a, b) {
  return a - b;
}); // Orden ascendente

console.log(numeros); // [1, 2, 5, 6, 9]

let numeros = [1, 2, 2, 3, 4, 4, 5];
let numerosUnicos = new Set(numeros);

console.log(numerosUnicos); // {1, 2, 3, 4, 5}

numeros = Array.from(numerosUnicos); // Convertir el Set a Array

console.log(numeros); // [1, 2, 3, 4, 5]

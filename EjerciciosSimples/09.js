let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < numeros.length; i++) {
  console.log("Posición: " + i + " Valor: " + numeros[i]);
}

// Alternativa usando forEach() para arrays:

numeros.forEach((num) => console.log(num));

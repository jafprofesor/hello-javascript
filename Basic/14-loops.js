/*
Clase 29 - Bucles
*/

// Loops o bucles
// Son estructuras de control de flujo que nos permiten repetir un bloque de código un número determinado de veces
// o mientras se cumpla una condición
// En JavaScript tenemos los bucles for, while, do while, for of y for in
// También podemos usar las palabras reservadas break y continue

// for
// for (inicialización; condición; incremento) { bloque de código }
// La inicialización se ejecuta una sola vez al principio
// La condición se evalúa antes de cada iteración
// El incremento se ejecuta al final de cada iteración

for (let i = 0; i < 5; i++) {
  console.log(`Hola ${i}`);
} // Hola 0, Hola 1, Hola 2, Hola 3, Hola 4

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento: ${numbers[i]}`);
} // Elemento: 1, Elemento: 2, Elemento: 3, Elemento: 4, Elemento: 5, Elemento: 6, Elemento: 7, Elemento: 8

// while
// while (condición) { bloque de código }
// La condición se evalúa antes de cada iteración
// Si la condición es verdadera, se ejecuta el bloque de código
// Si la condición es falsa, se sale del bucle
// Es posible que el bloque de código no se ejecute nunca si la condición es falsa desde el principio

let i = 0;
while (i < 5) {
  console.log(`Hola ${i}`);
  i++;
} // Hola 0, Hola 1, Hola 2, Hola 3, Hola 4

// Bucle infinito
// while(true) {
// }

// do while
// do { bloque de código } while (condición)
// La condición se evalúa después de cada iteración
// Si la condición es verdadera, se ejecuta el bloque de código
// Si la condición es falsa, se sale del bucle
// Se ejecuta al menos una vez

i = 6;
do {
  console.log(`Hola ${i}`);
  i++;
} while (i < 5);

// for of
// for (variable of iterable) { bloque de código }
// La variable toma el valor de cada elemento del iterable
// El iterable puede ser un array, un string, un set, un map, etc.
// No se puede usar con objetos, ya que no son iterables

let myArray = [1, 2, 3, 4]; // Array es un objeto iterable

let mySet = new Set([
  // Set es un objeto iterable
  "Juan",
  "Antonio",
  "jaf",
  37,
  true,
  "juanprofesor@proton.com",
]);

let myMap = new Map([
  // Map es un objeto iterable
  ["name", "Juan"],
  ["email", "juanprofesor@proton.com"],
  ["age", 37],
]);

let myString = "¡Hola, JavaScript!"; // String es un objeto iterable

for (let value of myArray) {
  console.log(value); // 1, 2, 3, 4
}

for (let value of mySet) {
  console.log(value); // Juan, Antonio, jaf, 37, true,
}

for (let value of myMap) {
  console.log(value); // ["name", "Juan"], ["email", " ... "], ["age", 37]
}

for (let value of myString) {
  console.log(value); // ¡, H, o, l, a, ...
}

// break y continue

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  } else if (i == 7) {
    break;
  }
  console.log(`Hola ${i}`); // Hola 0, Hola 1, Hola 2, Hola 3, Hola 4, Hola 6
}

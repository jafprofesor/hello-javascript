/*
Clase 26 - Sets 
*/

// Set es una colección de valores únicos
// Se diferencia de un array en que no admite duplicados
// No tiene índices
// No tiene propiedades length
// No tiene métodos push, pop, shift, unshift, etc.

// Declaración

let mySet = new Set(); // Set vacío

console.log(mySet);

// Inicialización

mySet = new Set([
  "Juan",
  "Antonio",
  "jaf",
  37,
  true,
  "juanprofesor@proton.com",
]); // Set con valores

console.log(mySet);

// Métodos comunes

// add y delete

mySet.add("https://juanprofesor.com"); // Añadir un valor
mySet.add("https://juanprofesor.com"); // No se añade porque ya existe

console.log(mySet);

mySet.delete("https://juanprofesor.com"); // Eliminar un valor

console.log(mySet);

console.log(mySet.delete("Juan")); // Eliminar un valor
console.log(mySet.delete(4)); // Eliminar un valor

console.log(mySet);

// has

console.log(mySet.has("Juan")); // Comprobar si existe un valor
console.log(mySet.has("Antonio")); // Comprobar si existe un valor

// size

console.log(mySet.size);

// Convertir un set a array
let myArray = Array.from(mySet); // Convertir un set a array
console.log(myArray);

// Convertir un array a set
myArray[5] = "jaf";
console.log("con el jaf duplicado: " + myArray);
mySet = new Set(myArray); // Convertir un array a set
console.log("con el jaf duplicado: " + mySet);

// No admite duplicados

mySet.add("juanprofesor@proton.com"); // Añadir un valor
mySet.add("juanprofesor@proton.com"); // No se añade porque ya existe
mySet.add("juanprofesor@proton.com"); // No se añade porque ya existe
mySet.add("juanprofesor@proton.com"); // No se añade porque ya existe
console.log(mySet);

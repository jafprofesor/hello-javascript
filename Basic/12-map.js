/*
Clase 27 - Maps
*/

// Map
// Es una colección de pares de clave-valor
// Se puede iterar por la clave, valor o ambos
// Se puede limpiar, eliminar, añadir elementos
// Se puede saber el tamaño de la colección
// No tiene propiedades ni métodos heredados de Object.prototype
// Se puede usar cualquier tipo de dato como clave o valor
// Se diferencia de un objeto en que las claves pueden ser de cualquier tipo de dato
// y no solo cadenas de texto

// Declaración

let myMap = new Map(); // Map { }

console.log(myMap);

// Inicialiación

myMap = new Map([
  ["name", "Juan"],
  ["email", "juanprofesor@proton.com"],
  ["age", 37],
]);

console.log(myMap);

// Métodos y propiedades

// set

myMap.set("alias", "jaf"); // Es como poner myMap["alias"] = "jaf"
myMap.set("name", "Juan Antonio"); // Modifica el valor de la clave "name"

console.log(myMap);

// get

console.log(myMap.get("name")); // Sirve para obtener el valor de una clave
let valorDelNombre = myMap["name"]; // Es lo mismo que la línea anterior
console.log(myMap.get("surname")); // Sirve para obtener el valor de una clave que no existe

// has

console.log(myMap.has("surname")); // Sirve para saber si una clave existe
console.log(myMap.has("age")); // Sirve para saber si una clave existe

// delete

myMap.delete("email"); // Sirve para eliminar un par clave-valor

console.log(myMap);

// keys, values y entries

console.log(myMap.keys()); // Devuelve un objeto iterable con las claves es decir los nombres de las propiedades
console.log(myMap.values()); // Devuelve un objeto iterable con los valores es decir los valores de las propiedades
console.log(myMap.entries()); // Devuelve un objeto iterable con los pares clave-valor es decir los nombres y valores de las propiedades

// size

console.log(myMap.size); // Srive para saber el tamaño de la colección

// clear

myMap.clear(); // Sirve para eliminar todos los pares clave-valor

console.log(myMap);

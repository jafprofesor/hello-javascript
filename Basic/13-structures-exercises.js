/*
Clase 28 - Ejercicios: Estructuras
*/

// 1. Crea un array que almacene cinco animales
let animals = ["perro", "gato", "pez", "pájaro", "hamster"];

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("tortuga");
animals.push("conejo");

// 3. Elimina el que se encuentra en tercera posición
console.log("lista completa: " + animals);
animals.splice(2, 1);
console.log(animals);

// 4. Crea un set que almacene cinco libros
let books = new Set([
  "El señor de los anillos",
  "Harry Potter",
  "Cien años de soledad",
  "El código Da Vinci",
  "El principito",
]);

// 5. Añade dos más. Uno de ellos repetido
books.add("El alquimista");
books.add("El alquimista");

// 6. Elimina uno concreto a tu elección
books.delete("El código Da Vinci");

// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(months.has(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(months);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = ["uno", "dos", "tres"];
let set = new Set(array);
let map = new Map();
map.set("set", set);
console.log(map);

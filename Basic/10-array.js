/*
Clase 25 - Arrays
*/

// Array es una colección de valores
// Tiene índices
// Tiene propiedades length
// Tiene métodos push, pop, shift, unshift, etc.

// Declaración

let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

// Inicialización

myArray = [3]; // Array con un elemento
myArray2 = new Array(3); // Array con 3 elementos undefined

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4]; // Array con 4 elementos
myArray2 = new Array(1, 2, 3, 4); // Array con 4 elementos

console.log(myArray);
console.log(myArray2);

myArray = ["Juan", "Antonio", "jaf", 37, true]; // Array con 5 elementos
myArray2 = new Array("Juan", "Antonio", "jaf", 37, true); // Array con 5 elementos

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3); // Array con 3 elementos undefined
myArray2[2] = "Juan"; // Aquí se inicializa el tercer elemento
// myArray2[0] = "Antonio"
myArray2[1] = "jaf"; // Aquí se inicializa el segundo elemento
myArray2[4] = "jaf"; // Aquí se inicializa el quinto elemento

console.log(myArray2);

myArray = []; // Array vacío
myArray[2] = "juan"; // Aquí se inicializa el tercer elemento
// myArray[0] = "Antonio"
myArray[1] = "jaf"; // Aquí se inicializa el segundo elemento

console.log(myArray);

// Métodos comunes

myArray = []; // Array vacío

// push y pop

myArray.push("Juan"); // Añade al final
myArray.push("Antonio"); // Añade al final
myArray.push("jaf"); // Añade al final
myArray.push(37); // Añade al final

console.log(myArray);

console.log(myArray.pop()); // Elimina el último y lo devuelve
myArray.pop(); // Elimina el último

console.log(myArray);

// shift y unshift

console.log(myArray.shift()); // Elimina el primero y lo devuelve
console.log(myArray); // Elimina el primero

myArray.unshift("Juan", "jaf"); // Añade al principio
console.log(myArray); // Añade al principio

// length

console.log(myArray.length); // Longitud del array

// clear

myArray = [];
myArray.length = 0; // alternativa a myArray = []
console.log(myArray);

// slice

myArray = ["Juan", "Antonio", "jaf", 37, true]; // Array con 5 elementos

let myNewArray = myArray.slice(1, 3); // Copia los elementos del 1 al 3

console.log(myArray);
console.log(myNewArray);

// splice

myArray.splice(1, 3); // Elimina los elementos del 1 al 3
console.log(myArray);

myArray = ["Juan", "Antonio", "jav", 37, true]; // Array con 5 elementos

myArray.splice(1, 2, "Nueva entrada"); // Elimina los elementos del 1 al 2 y añade "Nueva entrada"
console.log(myArray);

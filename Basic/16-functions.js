/*
Clase 31 - Funciones
*/

// Funciones
// Las funciones son bloques de código que se pueden ejecutar
// en cualquier momento y desde cualquier lugar del código
// JavaScript.
// Las funciones pueden recibir parámetros y devolver valores.

// Simple
// Las funciones se declaran con la palabra reservada function

function myFunc() {
  // Declaración
  console.log("¡Hola, función!"); // Cuerpo
}

for (let i = 0; i < 5; i++) {
  myFunc(); // Llamada
}

// Con parámetros
// Los parámetros son valores que se pasan a la función
// para que los utilice en su ejecución

function myFuncWithParams(name) {
  console.log(`¡Hola, ${name}!`);
}

myFuncWithParams("Juan");
myFuncWithParams("jaf");

// Funciones anónimas
// Las funciones anónimas no tienen nombre y se asignan a una variable
// Se utilizan para pasarlas como parámetros a otras funciones

const myFunc2 = function (name) {
  console.log(`¡Hola, ${name}!`);
};

myFunc2("Juan Antonio");

// Arrow functions, funciones flecha
// Las arrow functions son una forma más corta de declarar funciones
// y se utilizan mucho en JavaScript moderno
// El formato es: (parámetros) => {cuerpo}
// Si el cuerpo de la función es una sola línea, se puede omitir las llaves
// y el return

const myFunc3 = (name) => {
  console.log(`¡Hola, ${name}!`);
};

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`); // Una sola línea

myFunc3("Juan Antonio");
myFunc4("Juan Antonio");

// Parámetros
// Los parámetros de una función son los valores que recibe
// para realizar su tarea
// Los parámetros pueden tener un valor por defecto
// Los parámetros pueden ser opcionales

function sum(a, b) {
  console.log(a + b);
}

sum(5, 10); // 15
sum(5); // NaN
sum(); // NaN

function defaultSum(a = 0, b = 0) {
  console.log(a + b); // 0 + 0 = 0
}

// Por defecto

defaultSum(); // 0
defaultSum(5); //  5 + 0 = 5
defaultSum(5, 10); // 5 + 10 = 15
// defaultSum((b = 5)); // NaN

// Retorno de valores
// Las funciones pueden devolver un valor con la palabra reservada return
// Si no se especifica un valor de retorno, la función devuelve undefined

function mult(a, b) {
  return a * b;
}

let result = mult(5, 10);
console.log(result); // 50

// Funciones anidadas
// Las funciones pueden estar dentro de otras funciones
// Las funciones internas no pueden ser llamadas desde fuera de la función
// en la que están declaradas

function extern() {
  console.log("Función externa");
  function intern() {
    console.log("Función interna");
  }
  intern();
}

extern(); // Función externa
// intern() Error: fuera del scope (alcance) de la función

// Funciones de orden superior
// Las funciones de orden superior son funciones que reciben
// otras funciones como parámetros
// Se utilizan para abstraer la lógica de la función principal

function applyFunc(func, param) {
  func(param);
}

applyFunc(myFunc4, "función de orden superior"); // ¡Hola, función de orden superior!

// forEach en arrays
// forEach es un método de los arrays que recorre todos los elementos
// del array y ejecuta una función por cada uno de ellos

let myArray = [1, 2, 3, 4]; // Array

let mySet = new Set([
  // Set
  "Juan",
  "Antonio",
  "jaf",
  37,
  true,
  "juanprofesor@proton.com",
]);

let myMap = new Map([
  // Map
  ["name", "Juan"],
  ["email", "juanprofesor@proton.com"],
  ["age", 37],
]);

myArray.forEach(function (value) {
  console.log(value); // 1, 2, 3, 4
});

myArray.forEach((value) => console.log(value)); // 1, 2, 3, 4

mySet.forEach((value) => console.log(value)); // Juan, Antonio, jaf, 37, true, juanprofesor@proton.com

myMap.forEach((value) => console.log(value)); // Juan, Antonio, jaf, 37, true, juanprofesor@proton.com

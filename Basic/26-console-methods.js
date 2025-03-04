/*
Clase 42 - Console
*/

// Console es un objeto global que proporciona métodos para interactuar con la consola del navegador.

// log es el método más comúnmente utilizado para imprimir mensajes en la consola.

console.log("¡Hola, JavaScript!");

// error es un método para imprimir mensajes de error en la consola.

console.error("Este es un mensaje de error.");
console.error(
  "Error al conectarse a la base de datos: ",
  new Error("Conexión fallida.")
);

// warn es un método para imprimir mensajes de advertencia en la consola.

console.warn("Este es un mensaje de advertencia.");

// info es un método para imprimir mensajes de información en la consola.

console.info("Este es un mensaje de información adicional.");

// table es un método para imprimir datos en forma de tabla en la consola.

let data = [
  ["Juan", 37],
  ["Sara", 21],
];

console.table(data);

data = [
  { name: "Juan", age: 37 },
  { name: "Sara", age: 21 },
];

console.table(data);

// group es un método para agrupar mensajes en la consola.

console.group("Usuario:");
console.log("Nombre: Juan");
console.log("Edad: 37");
console.groupEnd();

// time es un método para medir el tiempo de ejecución de un bloque de código.

console.time("Tiempo de ejecución 2");

for (let i = 0; i < 10000; i++) {}

console.time("Tiempo de ejecución 1");

for (let i = 0; i < 10000; i++) {}

console.timeEnd("Tiempo de ejecución 2");

for (let i = 0; i < 10000; i++) {}

console.timeEnd("Tiempo de ejecución 1");

// assert es un método para imprimir un mensaje de error si la condición especificada no se cumple.

let age = 17;
console.assert(age >= 18, "El usuario debe ser mayor de edad.");

// count es un método para contar el número de veces que se ha llamado a un mensaje.

console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click");
console.count("Click");

// trace es un método para imprimir la pila de llamadas de una función.

function funcA() {
  funcB();
}

function funcB() {
  console.trace("Seguimiento de la ejecución.");
}

funcA();

// clear es un método para limpiar la consola.

// console.clear()

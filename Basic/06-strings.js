/*
Clase 21 - Strings
*/

// Strings (cadenas de texto)

// Concatenación

let myName = "Juan";
let greeting = "¡Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud

console.log(greeting.length);

// Acceso a caracteres

console.log(greeting[0]);
console.log(greeting[greeting.length - 1]);

// Métodos comunes

console.log(greeting.toUpperCase()); // Mayúsculas
console.log(greeting.toLowerCase()); // Minúsculas
console.log(greeting.indexOf("Hola")); // Índice
console.log(greeting.indexOf("Juan"));
console.log(greeting.indexOf("MoureDev"));
console.log(greeting.includes("Hola")); // Incluye
console.log(greeting.includes("Brais"));
console.log(greeting.includes("MoureDev"));
console.log(greeting.slice(0, 10)); // Sección
console.log(greeting.replace("Juan", "Brais")); // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, 
este
es 
mi
curso 
de
JavaScript`;
console.log(message);

// Interpolación de valores
let email = "juanprofesor@proton.me";
console.log("¡Hola, " + myName + "! Tu email es " + email + ".");
console.log(`¡Hola, ${myName}! Tu email es ${email}.`);

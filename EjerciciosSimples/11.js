let numero = 100;
let numeroComoTexto = numero.toString(); // Convertir número a string
console.log(typeof numeroComoTexto); // "string"
console.log(numeroComoTexto); // "100"

let textoNumerico = "50";
let textoComoNumero = Number(textoNumerico); // Convertir string a número
console.log(typeof textoComoNumero); // "number"

numero = 100;
numeroComoTexto = "" + numero; // Convertir número a string
console.log(typeof numeroComoTexto); // "string"

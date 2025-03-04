/*
Clase 22 - Ejercicios: Strings
*/

// 1. Concatena dos cadenas de texto
console.log("Hola" + "Mundo");
// 2. Muestra la longitud de una cadena de texto
console.log("Hola Mundo".length);
// 3. Muestra el primer y último carácter de un string
let texto1 = "Hola a Hodo el Hundo";
console.log(texto1.charAt(0));
console.log(texto1.charAt(texto1.length - 1));
// 4. Convierte a mayúsculas y minúsculas un string
console.log("Hola Mundo".toUpperCase());
console.log("Hola Mundo".toLowerCase());
// 5. Crea una cadena de texto en varias líneas
let texto = `Hola
Mundo`;
console.log(texto);
// 6. Interpola el valor de una variable en un string
console.log(`Hola ${texto1}`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(texto1.replace(/ /g, "-"));
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(texto1.includes("Hodo"));
// 9. Comprueba si dos strings son iguales
console.log("Hola Mundo" === "Hola Mundo");
// 10. Comprueba si dos strings tienen la misma longitud
console.log("Hola Mundo".length === "Hola mi Mundo".length);
// 11. Devuelve el valor de la cadena de texto a partir de la posición 3
console.log("Hola Mundo".slice(3));

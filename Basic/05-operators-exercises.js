/*
Clase 20 - Ejercicios: Operadores
*/

// 1. Crea una variable para cada operación aritmética
const sum = 1 + 2;
const subtraction = 1 - 2;
const multiplication = 1 * 2;
const division = 1 / 2;
const module = 1 % 2;
const elevar = 2 ** 3;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
sum += 2;
subtraction -= 2;
multiplication *= 2;
division /= 2;
module %= 2;
elevar **= 3;
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(1 < 2); // true
console.log(1 <= 2); // true
console.log(1 === 1); // true
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(1 > 2); // false
console.log(1 >= 2); // false
console.log(1 !== 1); // false
// 5. Utiliza el operador lógico and
console.log(1 < 2 && 2 < 3); // true
// 6. Utiliza el operador lógico or
console.log(1 < 2 || 2 > 3); // true
// 7. Combina ambos operadores lógicos
console.log((1 < 2 && 2 > 3) || 2 < 5); // true
// 8. Añade alguna negación
console.log(!((1 < 2 && 2 > 3) || 2 < 5)); // false
// 9. Utiliza el operador ternario
console.log(1 < 2 ? "Es menor" : "Es mayor"); // Es menor
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(1 + 2 === 3 && 1 < 2 ? "Es menor" : "Es mayor"); // Es menor

/*
Clase 30 - Ejercicios: Bucles
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let i = 1;
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 20);

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const text = "JavaScript";
let vowels = 0;
for (let i = 0; i < text.length; i++) {
  const char = text[i].toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    vowels++;
  }
}

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numbers = [2, 3, 5, 7, 11];
let product = 1;
for (let i = 0; i < numbers.length; i++) {
  product *= numbers[i];
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
// 7.1. Escribe un bucle que imprima las tablas de multiplicar del 1 al 10
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 8. Usa un bucle para invertir una cadena de texto
const str = "JavaScript";
let reversed = ""; // 'tpircSavaJ'
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0;
let b = 1;
let c;
for (let i = 0; i < 10; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const values = [5, 12, 8, 130, 44];
const filtered = [];
for (let i = 0; i < values.length; i++) {
  if (values[i] > 10) {
    filtered.push(values[i]);
  }
}

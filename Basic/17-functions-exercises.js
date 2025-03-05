/*
Clase 32 - Ejercicios: Funciones
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
  return a + b;
}
// la misma pero en flecha
const sum = (a, b) => a + b;

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function getMax(arr) {
  return Math.max(...arr); // Math.max(1, 2, 3, 4, 5) El operador de propagación (`...`) en JavaScript se utiliza para expandir elementos de un iterable (como un arreglo) en lugares donde se esperan cero o más argumentos (para llamadas a funciones) o elementos (para arreglos). En el contexto de la función 17-functions-exercises.js ), el operador de propagación se utiliza para pasar los elementos de un arreglo como argumentos individuales a la función.

// la misma pero en flecha
const getMax = (arr) => Math.max(...arr);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene sin utilizar la funcion flecha
function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) { // includes() determina si un array incluye un determinado elemento, devuelve true o false según corresponda.
      count++;
    }
  }
  return count;
}
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas sin función flecha
function toUpperCase(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase()); // toUpperCase() convierte una cadena en mayúsculas.
  }
  return newArr;
}

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario sin función flecha
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) { // % es el operador de módulo, que devuelve el resto de una división
      return false;
    }
  }
  return true;
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos sin función flecha
function commonElements(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) { // arr1.length es la propiedad que devuelve la cantidad de elementos de un array
    if (arr2.includes(arr1[i])) { // includes() determina si un array incluye un determinado elemento, devuelve true o false según corresponda.
      newArr.push(arr1[i]); // push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    }
  }
  return newArr;
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { // arr.length es la propiedad que devuelve la cantidad de elementos de un array
    if (arr[i] % 2 === 0) { // % es el operador de módulo, que devuelve el resto de una división
      sum += arr[i]; // += es un operador de asignación que suma el valor de la derecha al valor de la izquierda y asigna el resultado a la variable de la izquierda.
    }
  }
  return sum;
}
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function squareNumbers(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]); // Math.pow(arr[i], 2) o arr[i] ** 2
  }
  return newArr;
}

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverseWords(str) {
  return str.split(' ').reverse().join(' '); // split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas. join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
}

// 10. Crea una función que calcule el factorial de un número dado
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
// 11. Crea una función que reciba un array de números y devuelva la suma de todos los números
function sumAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// 12. Crea una función que reciba un array de números y devuelva el número más pequeño
function getMin(arr) {
  return Math.min(...arr);
}
// 13. Crea una función que reciba un array de números y devuelva un nuevo array con los números pares
function getEven(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// 14. Crea una función que reciba un array de números y devuelva un nuevo array con los números impares
function getOdd(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// 15. Crea una función que reciba un array de números y devuelva un nuevo array sin los números repetidos sin función flecha
function removeDuplicates(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// 16. Crea una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor sin función flecha
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}
// 17. Crea una función que reciba un array de números y devuelva un nuevo array con los números ordenados de mayor a menor
function sortNumbers(arr) {
  return arr.sort((a, b) => b - a);
}
// 18. Crea una función que reciba un array de números y devuelva la media de todos los números
function getAverage(arr) {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
} // reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.
// 19. Crea una función que reciba un array de números y devuelva el número más grande y el más pequeño
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
// 20. Crea una función que reciba un array de números y devuelva un nuevo array con los números elevados al cuadrado
function squareNumbers(arr) {
  return arr.map((num) => num ** 2);
} 
// map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// 21. Crea una función que reciba un array de números y devuelva un nuevo array con los números elevados al cubo
function cubeNumbers(arr) {
  return arr.map((num) => num ** 3);
}


/*
Clase 36 - Ejercicios: Desestructuración y propagación
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let arr = [1, 2, 3, 4, 5];
let [first, second] = arr; // first = 1, second = 2
console.log(first, second);
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [firstElement, secondElement, thirdElement = 3] = arr; // firstElement = 1, secondElement = 2, thirdElement = 3
console.log(firstElement, secondElement, thirdElement);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let obj = { name: "John", age: 30, city: "New York" };
let { name, age } = obj; // name = 'John', age = 30
console.log(name, age);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { name: myName, age: myAge } = obj; // myName = 'John', myAge = 30
console.log(myName, myAge);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let obj2 = { person: { name: "John", age: 30 } };
let {
  person: { name: personName, age: personAge },
} = obj2; // personName = 'John', personAge = 30
console.log(personName, personAge);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
console.log(combined);

// 7. Usa propagación para crear una copia de un array
let copy = [...arr1]; // [1, 2, 3]
console.log(copy);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let obj3 = { name: "John" };
let obj4 = { age: 30 };
let combinedObj = { ...obj3, ...obj4 }; // { name: 'John', age: 30 }
console.log(combinedObj);

// 9. Usa propagación para crear una copia de un objeto
let copyObj = { ...obj3 }; // { name: 'John' }
console.log(copyObj);

// 10. Combina desestructuración y propagación
let arr3 = [1, 2, 3, 4, 5];
let [firstElement, secondElement, ...rest] = arr3; // firstElement = 1, secondElement = 2, rest = [3, 4, 5]
console.log(firstElement, secondElement, rest);

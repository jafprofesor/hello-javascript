/*
Clase 35 - Desestructuración y propagación
*/
// Desestructuración consiste en extraer datos de arrays y objetos y asignarlos a variables.
// Sirve para simplificar la asignación de valores a variables.
// Propagación consiste en combinar arrays y objetos.
// Sirve para simplificar la creación de arrays y objetos.
// Su sintaxis es muy similar en ambos casos.

// Ejemplo de desestructuración
let myArray = [1, 2, 3, 4]; // Array

let person = {
  // Object
  name: "Juan",
  age: 37,
  alias: "jaf",
};

let myValue = myArray[1]; // Forma tradicional de asignar valores a variables
console.log(myValue); // 2

let myName = person.name; // Forma tradicional de asignar valores a variables
console.log(myName); // Juan

// Desestructuración

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray; // Asignación de valores a variables
console.log(myValue0); // 1
console.log(myValue1); // 2
console.log(myValue2); // 3
console.log(myValue3); // 4
console.log(myValue4); // undefined

// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] =
  myArray; // Asignación de valores a variables
console.log(myValue5); // 1
console.log(myValue6); // 2
console.log(myValue7); // 3
console.log(myValue8); // 4
console.log(myValue9); // 0

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray; // Asignación de valores a variables
console.log(myValue10); // 1
console.log(myValue13); // 4

// Sintaxis objects

let { name, age, alias } = person; // Asignación de valores a variables
console.log(name); // Juan
console.log(age); // 37
console.log(alias); // jaf

// Sintaxis objects con valores predeterminados

let { name2, age2, alias2, email = "email@email.com" } = person; // Asignación de valores a variables
console.log(name2); // No existe
console.log(age2); // No existe
console.log(alias2); // No existe
console.log(email); //

// Sintaxis objects con nuevos nombres de variables

let { alias: alias3, name: name3, age: age3 } = person; // Asignación de valores a variables
console.log(name3); // Juan
console.log(age3); // 37
console.log(alias3); // jaf

// Objects anidados

let person3 = {
  name: "Juan",
  age: 37,
  alias: "jaf",
  walk: function () {
    console.log("La persona camina.");
  },
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.age} años de experiencia trabaja.`); // this hace referencia al objeto job
    },
  },
};

let {
  name: name4,
  job: { name: jobName },
} = person3;

console.log(name4); // Juan
console.log(jobName); // Programador

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]; // Creación de arrays

console.log(myArray2); // [1, 2, 3, 4, 5, 6]

// Copia de arrays

let myArray3 = [...myArray]; // Creación de arrays

console.log(myArray3); // [1, 2, 3, 4]

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]; // Creación de arrays

console.log(myArray4); // [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4]

// Sintaxis objects

let person4 = { ...person, email: "braismoure@mouredev.com" }; // Creación de objects

console.log(person4); // {name: "Juan", age: 37, alias: "jaf", email: "

// Copia de objects

let person5 = { ...person }; // Creación de objects

console.log(person5); // {name: "Juan", age: 37, alias: "jaf"}

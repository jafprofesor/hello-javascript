/*
Clase 33 - Objetos
*/

// Objetos
// Los objetos son estructuras de datos que permiten almacenar múltiples valores de diferentes tipos.
// Los objetos se componen de propiedades, que son pares clave-valor.
// Las propiedades pueden ser de cualquier tipo, incluso otros objetos.
// Las propiedades pueden ser accedidas mediante notación punto o notación de corchetes.
// Las propiedades pueden ser modificadas, eliminadas o añadidas.
// Los objetos pueden contener métodos, que son funciones que pueden ser invocadas.
// Los objetos pueden ser anidados, es decir, un objeto puede contener otro objeto.
// Los objetos pueden ser comparados mediante igualdad.
// Los objetos pueden ser iterados mediante un bucle for...in.
// Los objetos pueden ser creados mediante funciones constructoras.

// Sintaxis
// let object = {
//     key1: value1,
//     key2: value2,
//     ...
// }

let person = {
  name: "Juan",
  age: 37,
  alias: "jaf",
};

// Acceso a propiedades
// Las propiedades de un objeto pueden ser accedidas mediante notación punto o notación de corchetes.
// La notación punto es más común y más legible.
// La notación de corchetes es útil cuando el nombre de la propiedad es dinámico o contiene caracteres especiales.

// Notación punto
console.log(person.name);

// Notación de corchetes
console.log(person["name"]);

// Modificación de propiedades
// Las propiedades de un objeto pueden ser modificadas mediante la asignación de un nuevo valor.
// Si la propiedad no existe, se crea automáticamente.
// Si la propiedad ya existe, se sobreescribe su valor.
// Si la propiedad es de tipo primitivo, se convierte automáticamente al nuevo valor.
// Si la propiedad es de tipo objeto, se mantiene la referencia al objeto original.

person.name = "Juan Antonio"; // Modificación
console.log(person.name);

console.log(typeof person.age); // Tipo de dato
person.age = "37"; // Modificación
console.log(person.age); // Modificación
console.log(typeof person.age); // Conversión automática

// Eliminación de propiedades
// Las propiedades de un objeto pueden ser eliminadas mediante el operador delete.
// Si la propiedad no existe, no ocurre nada.
// Si la propiedad existe, se elimina del objeto.

delete person.age;

console.log(person);

// Nueva propiedad
// Las propiedades de un objeto pueden ser añadidas mediante la asignación de un nuevo valor.
// Si la propiedad no existe, se crea automáticamente.
// Si la propiedad ya existe, se sobreescribe su valor.
// Si la propiedad es de tipo primitivo, se convierte automáticamente al nuevo valor.
// Si la propiedad es de tipo objeto, se mantiene la referencia al objeto original.

person.email = "juanprofesor@proton.com"; // Nueva propiedad
person["age"] = 37; // Nueva propiedad

console.log(person);

// Métodos (funciones)
// Los objetos pueden contener métodos, que son funciones que pueden ser invocadas.
// Los métodos pueden acceder a las propiedades del objeto mediante la palabra clave this.
// Los métodos pueden ser invocados mediante notación punto o notación de corchetes.

let person2 = {
  name: "Juan",
  age: 37,
  alias: "jaf",
  walk: function () {
    // Método
    console.log("La persona camina.");
  },
};
person2.walk(); // Invocación

// Anidación de objetos
// Los objetos pueden ser anidados, es decir, un objeto puede contener otro objeto.
// Los objetos anidados pueden ser accedidos mediante notación punto o notación de corchetes.
// Los objetos anidados pueden contener métodos.

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
      console.log(`La persona de ${this.age} años de experiencia trabaja.`);
    },
  },
};

console.log(person3); // Objeto

console.log(person3.name); // Propiedad
console.log(person3.job); // Objeto anidado
console.log(person3.job.name); // Propiedad del objeto anidado
person3.job.work(); // Método del objeto anidado

// Igualdad de objetos
// Los objetos pueden ser comparados mediante igualdad.
// Dos objetos son iguales si tienen la misma referencia en memoria.
// Dos objetos son distintos si tienen distinta referencia en memoria.
// Dos objetos son equivalentes si tienen las mismas propiedades con los mismos valores.
// Dos objetos son distintos si tienen distinta cantidad de propiedades o propiedades con distintos valores.

let person4 = {
  name: "Juan Antonio",
  alias: "jaf",
  email: "juanprofesor@proton.com",
  age: 37,
};

console.log(person); // Objeto
console.log(person4); // Objeto

console.log(person == person4); // Comparación
console.log(person === person4); // Comparación

console.log(person.name == person4.name); // Comparación

// Iteración
// Los objetos pueden ser iterados mediante un bucle for...in.
// El bucle for...in itera sobre las propiedades del objeto.
// El bucle for...in itera sobre las propiedades enumerables del objeto.
// El bucle for...in itera sobre las propiedades propias del objeto.
// El bucle for...in itera sobre las propiedades del objeto y de sus prototipos.

for (let key in person4) {
  console.log(key + ": " + person4[key]);
}

// Funciones como objetos
// Las funciones en JavaScript son objetos de primera clase.
// Las funciones pueden ser asignadas a variables, pasadas como argumentos y retornadas como valores.
// Las funciones pueden ser invocadas mediante notación de corchetes.

function Person(name, age) {
  // Debería ser una clase
  this.name = name;
  this.age = age;
}

let person5 = new Person("Juan", 37); // Instancia
console.log(person5); // Objeto
console.log(person5.name); // Propiedad

console.log(typeof person5); // Tipo de dato
console.log(typeof person4); // Tipo de dato

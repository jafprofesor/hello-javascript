/*
Clase 34 - Ejercicios: Objetos
*/

// 1. Crea un objeto con 3 propiedades
let person = {
  name: "Juan",
  age: 37,
  alias: "jaf",
};

// 2. Accede y muestra su valor
console.log(person);
console.log(person.name);
console.log(person["name"]);

// 3. Agrega una nueva propiedad
person.email = "ejemplo@ejemplo.com";
console.log(person);

// 4. Elimina una de las 3 primeras propiedades
delete person.age;
console.log(person);

// 5. Agrega una función e invócala
person.sayHello = function () {
  console.log("Hola");
};
person.sayHello();

// 6. Itera las propiedades del objeto
for (let key in person) {
  console.log(key, person[key]);
}

// 7. Crea un objeto anidado
let person2 = {
  name: "Juan",
  age: 37,
  alias: "jaf",
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log("Trabajando");
    },
  },
};

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(person2.job);
console.log(person2.job.name);
person2.job.work();

// 9. Comprueba si los dos objetos creados son iguales
let person3 = {
  name: "Juan",
  age: 37,
  alias: "jaf",
};

console.log(person == person3); // el resultado es false porque son dos objetos distintos
console.log(person === person3); // el resultado es false porque son dos objetos distintos

// 10. Comprueba si dos propiedades diferentes son iguales
let person4 = {
  name: "Juan Antonio",
  alias: "jaf",
  email: "ejemplo@ejemplo.com",
  age: 37,
};
console.log(person == person4); // el resultado es false porque son dos objetos distintos
console.log(person === person4); // el resultado es false porque son dos objetos distintos
console.log(person.alias == person4.alias); // el resultado es true porque las propiedades alias de ambos objetos son iguales
console.log(person.alias === person4.alias); // el resultado es true porque las propiedades alias de ambos objetos son iguales

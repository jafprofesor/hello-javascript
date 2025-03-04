/*
Clase 37 - Clases
*/

// Clases
// Las clases son una forma de definir objetos en JavaScript
// Sirven para definir un molde de un objeto

class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// Sintaxis de una clase
/* Class NombreClase {
     constructor(parametros) {
         this.propiedad = valor
     }
 } */

let person = new Person("Juan", 37, "jaf"); // Instanciar una clase
let person2 = new Person("Juan", 37, "jaf"); // Instanciar una clase

console.log(person); // Imprimir un objeto
console.log(person2); // Imprimir un objeto

console.log(typeof person); // Tipo de dato

// Valores por defecto

class DefaultPerson {
  constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person3 = new DefaultPerson("Juan", 37);

console.log(person3);

// Acceso a propiedades de un objeto

console.log(person3.alias); // Notación punto
console.log(person3["alias"]); // Notación corchetes

person3.alias = "jaf"; // Modificar una propiedad

console.log(person3.alias); // Notación punto
console.log(person3["alias"]); // Notación corchetes

// Funciones en clases (métodos)

class PersonWithMethod {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

  walk() {
    console.log("La persona camina."); // Método
  }
}

let person4 = new PersonWithMethod("Juan", 37, "jaf");
person4.walk(); // Llamar a un método

// Propiedades privadas con #
// Sirve para encapsular propiedades
// En el siguiente ejemplo, la propiedad #bank es privada

class PrivatePerson {
  #bank;

  constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }

  pay() {
    this.#bank;
  }
}

let person5 = new PrivatePerson("Juan", 37, "jaf", "IBAN123456789"); // bank es #bank

// No podemos acceder
// console.log(person5.bank)
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5);

// Getters y Setters (métodos de acceso)
// Sirve para acceder a propiedades privadas

// En el siguiente ejemplo, la propiedad #name es privada
// Se crea un método get para acceder a la propiedad
// Se crea un método set para modificar la propiedad
// y funciona de la siguiente manera:
/* La clase `GetSetPerson` en el código seleccionado es un ejemplo de cómo utilizar propiedades privadas y métodos de acceso (getters y setters) en JavaScript. Las propiedades privadas se definen utilizando el prefijo `#`, lo que significa que no pueden ser accedidas directamente desde fuera de la clase. En este caso, las propiedades privadas son `#name`, `#age`, `#alias` y `#bank`.

El constructor de la clase `GetSetPerson` toma cuatro parámetros: `name`, `age`, `alias` y `bank`, y los asigna a las propiedades privadas correspondientes. Esto permite inicializar una instancia de la clase con valores específicos para estas propiedades.

La clase también define un método getter para la propiedad `name`, lo que permite acceder al valor de `#name` desde fuera de la clase utilizando la sintaxis `person6.name`. Además, hay un método setter para la propiedad `bank`, que permite modificar el valor de `#bank` desde fuera de la clase utilizando la sintaxis `person6.bank = "new IBAN123456789"`.

En el código, se crea una instancia de `GetSetPerson` llamada `person6` con los valores "Juan", 37, "jaf" y "IBAN123456789" para las propiedades `name`, `age`, `alias` y `bank`, respectivamente. Luego, se imprime el objeto `person6` y el valor de su propiedad `name` en la consola. Finalmente, se actualiza la propiedad `bank` de `person6` a "new IBAN123456789" utilizando el setter definido en la clase.*/

class GetSetPerson {
  #name;
  #age;
  #alias;
  #bank;

  constructor(name, age, alias, bank) {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
    this.#bank = bank;
  }

  get name() {
    return this.#name;
  }

  set bank(bank) {
    this.#bank = bank;
  }
}

person6 = new GetSetPerson("Juan", 37, "jaf", "IBAN123456789");

console.log(person6);
console.log(person6.name);

person6.bank = "new IBAN123456789";

/*
Clase 38 - Herencia de clases
*/

// Herencia de clases
// La herencia es una forma de reutilizar código
// Se crea una clase padre y una clase hija
// La clase hija hereda las propiedades y métodos de la clase padre
/* En el código proporcionado, se definen tres clases: `Animal`, `Dog` y `Fish`, que demuestran el uso de la herencia en JavaScript. La clase `Animal` es la clase base que contiene un constructor que inicializa la propiedad `name` y un método `sound` que imprime un mensaje genérico indicando que el animal emite un sonido.

La clase `Dog` extiende la clase `Animal`, lo que significa que hereda sus propiedades y métodos. Sin embargo, la clase `Dog` sobrescribe el método `sound` para proporcionar una implementación específica que imprime "Guau!". Además, la clase `Dog` define un método adicional llamado `run` que imprime "El perro corre".

La clase `Fish` también extiende la clase `Animal`. En su constructor, llama al constructor de la clase base utilizando `super(name)` para inicializar la propiedad `name` y además inicializa una nueva propiedad llamada `size`. La clase `Fish` define un método `swim` que imprime "El pez nada".

En el código, se crean instancias de `Dog` y `Fish` llamadas `myDog` y `myFish`, respectivamente. Para `myDog`, se llama a los métodos `run` y `sound`, lo que resulta en la impresión de "El perro corre" y "Guau!". Para `myFish`, se llama a los métodos `swim` y `sound`, lo que resulta en la impresión de "El pez nada" y "El animal emite un sonido genérico". Esto demuestra cómo las clases derivadas pueden sobrescribir métodos de la clase base y agregar nuevos métodos. */

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("El animal emite un sonido genérico");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Guau!");
  }

  run() {
    console.log("El perro corre");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  swim() {
    console.log("El pez nada");
  }
}

let myDog = new Dog("MoureDog");
myDog.run();
myDog.sound();

let myFish = new Fish("MoureFish", 10);
myFish.swim();
myFish.sound();

// Métodos estáticos en clases
// Los métodos estáticos se pueden llamar sin instanciar la clase
// Se utilizan para agrupar funciones relacionadas
// Se definen con la palabra clave static
/* En el código seleccionado, la clase `MathOperations` define un método estático llamado `sum` que toma dos parámetros `a` y `b` y devuelve la suma de los mismos. Para llamar a un método estático, se utiliza la sintaxis `NombreClase.metodo(parametros)`.
En el ejemplo, se llama al método estático `sum` de la clase `MathOperations` con los valores 5 y 10, lo que resulta en la impresión de 15 en la consola. Esto demuestra cómo se pueden utilizar métodos estáticos para agrupar funciones relacionadas en una clase sin necesidad de instanciarla. */

class MathOperations {
  static sum(a, b) {
    return a + b;
  }
}

console.log(MathOperations.sum(5, 10));

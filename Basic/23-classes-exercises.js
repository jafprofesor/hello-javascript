/*
Clase 39 - Ejercicios: Clases
*/

// 1. Crea una clase que reciba dos propiedades
let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showData() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

// 2. Añade un método a la clase que utilice las propiedades
Person.prototype.showData = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// 3. Muestra los valores de las propiedades e invoca a la función
let person = new Person("John", 30);
person.showData();

// 4. Añade un método estático a la primera clase
Person.showStatic = function () {
  console.log("Static method");
};

// 5. Haz uso del método estático
Person.showStatic();

// 6. Crea una clase que haga uso de herencia
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }

  showData() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
  }
}

// 7. Crea una clase que haga uso de getters y setters
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

// 9. Utiliza los get y set y muestra sus valores
let user = new User("John");
console.log(user.name);
user.name = "Jane";
console.log(user.name);

// 10. Sobrescribe un método de una clase que utilice herencia
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }

  showData() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
  }
}

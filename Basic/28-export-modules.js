/*
Clase 44 - Módulos
*/

// Exportación de módulos
// Los módulos son archivos que contienen código JavaScript y que pueden ser importados en otros archivos para ser utilizados.
// Para exportar un módulo se utiliza la palabra reservada export seguida de la declaración que se desea exportar.
// Se pueden exportar variables, funciones, clases y objetos.
// Se pueden exportar múltiples elementos en un solo archivo.
// Se puede exportar un solo elemento por defecto.
// Para importar un módulo se utiliza la palabra reservada import seguida de la ruta del archivo que se desea importar.
// Se pueden importar múltiples elementos en un solo archivo.
// Se puede importar un solo elemento por defecto.
// Los módulos se importan y exportan en la parte superior del archivo.

// Funciones y variables

export function add(a, b) {
  return a + b;
}

console.log(add(5, 10));

// Propiedades y constantes

export const PI = 3.1416;
export let name = "jaf";

// Clases y objetos

export class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Exportación por defecto (solo se puede exportar un elemento por defecto)

export default function substract(a, b) {
  return a - b;
}

// export default class MyClass {

//     func() {
//         console.log("Mi clase")
//     }
// }

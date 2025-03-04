/*
Clase 40 - Manejo de errores
*/

// Excepción

// Produce una excepción
let myObject;
// console.log(myObject.email)

// Captura de errores
// try-catch (bloque de código que puede producir un error)
/* El código proporcionado utiliza una estructura `try...catch` 
para manejar posibles errores que puedan ocurrir durante la ejecución del bloque de código 
dentro de `try`. 
La estructura `try...catch` es una forma de control de flujo que permite capturar y manejar 
excepciones en JavaScript.
Dentro del bloque `try`, el código intenta acceder a la propiedad `email` 
de un objeto llamado `myObject` y luego imprime un mensaje indicando que la ejecución 
ha finalizado sin errores. 
Sin embargo, si `myObject` no está definido o no tiene una propiedad `email`, se lanzará una excepción.
Cuando ocurre una excepción dentro del bloque `try`, la ejecución del código se detiene y se transfiere 
al bloque `catch`. 
En este bloque, se captura el error y se ejecuta el código que maneja la excepción. 
En este caso, el bloque `catch` simplemente imprime un mensaje indicando que se ha producido un error.
Este enfoque permite que el programa continúe ejecutándose incluso si se encuentra un error, 
en lugar de detenerse abruptamente. Es una práctica común para manejar errores inesperados y 
proporcionar una respuesta adecuada sin interrumpir la ejecución del programa. */

try {
  // Código que intenta ejecutar
  console.log(myObject.email);
  console.log("Finaliza la ejecución sin errores");
} catch {
  // Bloque de error
  console.log("Se ha producido un error");
}

// Captura del error y mensaje
// Se puede acceder al objeto de error para obtener más información sobre el error que se ha producido.

try {
  console.log(myObject.email);
} catch (error) {
  console.log("Se ha producido un error:", error.message);
}

// finally (bloque de código que se ejecuta siempre)
// El bloque `finally` se ejecuta siempre, independientemente de si se produce un error o no.

try {
  console.log(myObject.email);
} catch (error) {
  console.log("Se ha producido un error:", error.message);
} finally {
  console.log("Este código se ejecuta siempre");
}

// No está soportado
// try {
//     console.log(myObject.email)
// } finally {
//     console.log("Este código se ejecuta siempre")
// }

// Lanzamiento de errores
// throw (lanza una excepción)

// throw new Error("Se ha producido un error")

function sumIntegers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operación sólo suma números");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Esta operación sólo suma números enteros");
  }
  if (a == 0 || b == 0) {
    throw new SumZeroIntegerError("Se está intentando sumar cero", a, b);
  }
  return a + b;
}

try {
  console.log(sumIntegers(5, 10));
  // console.log(sumIntegers(5.5, 10))
  console.log(sumIntegers("5", 10));
  // console.log(sumIntegers(5, "10"))
  // console.log(sumIntegers("5", "10"))
} catch (error) {
  console.log("Se ha producido un error:", error.message);
}

// Capturar varios tipos de errores

try {
  // console.log(sumIntegers(5.5, 10))
  console.log(sumIntegers("5", 10));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", error.message);
  } else if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}

// Crear excepciones personalizadas (heredar de Error)

class SumZeroIntegerError extends Error {
  // Error personalizado
  constructor(message, a, b) {
    // Constructor
    super(message); // Llama al constructor de la clase padre
    this.a = a; // Propiedad a
    this.b = b; // Propiedad b
  }

  printNumbers() {
    console.log(this.a, " + ", this.b); // Método printNumbers
  }
}

try {
  console.log(sumIntegers(0, 10));
} catch (error) {
  console.log("Se ha producido un error personalizado:", error.message);
  error.printNumbers();
}

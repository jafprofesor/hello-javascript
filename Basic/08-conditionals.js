/*
Clase 23 - Condicionales
*/

// if, else if, else

// if (si)
// if (condición) { código a ejecutar si la condición es verdadera }

let age = 37;

if (age == 37) {
  console.log("La edad es 37");
}

// else (si no)
// else { código a ejecutar si la condición es falsa }

if (age == 37) {
  console.log("La edad es 37");
} else {
  console.log("La edad no es 37");
}

// else if (si no, si)
// else if (condición) { código a ejecutar si la condición es verdadera }

if (age == 37) {
  console.log("La edad es 37");
} else if (age < 18) {
  console.log("Es menor de edad");
} else {
  console.log("La edad no es 37 ni es menor de edad");
}

// Operador ternario
// condición ? código a ejecutar si la condición es verdadera : código a ejecutar si la condición es falsa

const message = age == 37 ? "La edad es 37" : "La edad no es 37";
console.log(message);

// switch
// switch (valor) { case valor1: código a ejecutar si el valor es valor1; break; case valor2: código a ejecutar si el valor es valor2; break; default: código a ejecutar si el valor no coincide con ninguno de los casos anteriores; }

let day = 5;
let dayName;

switch (day) {
  case 1:
    dayName = "Lunes";
    break;
  case 2:
    dayName = "Martes";
    break;
  case 3:
    dayName = "Miércoles";
    break;
  case 4:
    dayName = "Jueves";
    break;
  case 5:
    dayName = "Viernes";
    break;
  case 6:
    dayName = "Sábado";
    break;
  case 7:
    dayName = "Domingo";
    break;
  default:
    dayName = "Número de día incorrecto";
}

console.log(dayName);

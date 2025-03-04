/*
Clase 24 - Ejercicios: Condicionales
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valorlet
let nombre = "Javier";
let imprime = "no";
if (imprime == "si") {
  console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "javier";
let contrasena = "1234";
if (usuario == "javier" && contrasena == "1234") {
  console.log("Bienvenido al curso de JavaScript");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0;
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 17;
if (edad >= 18) {
  console.log("Puede votar");
} else {
  console.log(`No puede votar, le faltan ${18 - edad} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let edad2 = 20;
let estado = edad2 >= 18 ? "adulto" : "menor";
console.log(estado);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 1;
if (mes >= 1 && mes <= 3) {
  console.log("Primavera");
} else if (mes >= 4 && mes <= 6) {
  console.log("Verano");
} else if (mes >= 7 && mes <= 9) {
  console.log("Otoño");
} else if (mes >= 10 && mes <= 12) {
  console.log("Invierno");
} else {
  console.log("Mes incorrecto");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias = 0;
if (
  mes == 1 ||
  mes == 3 ||
  mes == 5 ||
  mes == 7 ||
  mes == 8 ||
  mes == 10 ||
  mes == 12
) {
  dias = 31;
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
  dias = 30;
} else if (mes == 2) {
  dias = 28;
} else {
  console.log("Mes incorrecto");
}
// 7.1 Calcular si el año introducido es bisiesto o no
/* 
1. Si el año es uniformemente divisible por 4, vaya al paso 2. De lo contrario, vaya al paso 5.
2. Si el año es uniformemente divisible por 100, vaya al paso 3. De lo contrario, vaya al paso 4.
3. Si el año es uniformemente divisible por 400, vaya al paso 4. De lo contrario, vaya al paso 5.
4. El año es un año bisiesto (tiene 366 días).
5. El año no es un año bisiesto (tiene 365 días).
*/
let anno = 8;
let divisibleCuatro = anno % 4;
let divisibleCien = anno % 100;
let divisibleCuatrocientos = anno % 400;
if (divisibleCuatro == 0) {
  if (divisibleCien == 0) {
    if (divisibleCuatrocientos == 0) {
      console.log("Año bisiesto");
    } else {
      console.log("Año no bisiesto");
    }
  } else {
    console.log("Año bisiesto");
  }
} else {
  console.log("Año no bisiesto");
}

// otra versión
if (
  (divisibleCuatro == 0 && divisibleCuatrocientos == 0) ||
  divisibleCien != 0
) {
  console.log("Año bisiesto");
} else {
  console.log("Año no bisiesto");
}

// versión calendario Juliano, Gregoriano
let anio = 8;
// El calendario gregoriano se adoptó en 1582
// El calendario gregoriano se adoptó en 1582
const ANIO_ADOPCION_GREGORIANO = 1582;

if (anio < ANIO_ADOPCION_GREGORIANO) {
  // Calendario juliano: un año es bisiesto si es divisible por 4
  if (anio % 4 === 0) {
    console.log(`El año ${anio} es bisiesto (calendario juliano).`);
  } else {
    console.log(`El año ${anio} no es bisiesto (calendario juliano).`);
  }
} else {
  // Calendario gregoriano: un año es bisiesto si es divisible por 4
  // pero no es bisiesto si es divisible por 100
  // a menos que también sea divisible por 400
  if (anio % 4 === 0) {
    if (anio % 100 === 0) {
      if (anio % 400 === 0) {
        console.log(`El año ${anio} es bisiesto (calendario gregoriano).`);
      } else {
        console.log(`El año ${anio} no es bisiesto (calendario gregoriano).`);
      }
    } else {
      console.log(`El año ${anio} es bisiesto (calendario gregoriano).`);
    }
  } else {
    console.log(`El año ${anio} no es bisiesto (calendario gregoriano).`);
  }
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "frances";
switch (idioma) {
  case "espanol":
    console.log("Hola");
    break;
  case "ingles":
    console.log("Hello");
    break;
  case "frances":
    console.log("Bonjour");
    break;
  default:
    console.log("Idioma no soportado");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primavera");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Verano");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Otoño");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Invierno");
    break;
  default:
    console.log("Mes incorrecto");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dias = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dias = 30;
    break;
  case 2:
    dias = 28;
    break;
  default:
    console.log("Mes incorrecto");
}
console.log(dias);

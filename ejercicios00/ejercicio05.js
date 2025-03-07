function convertirTexto(texto, formato) {
  switch (formato) {
    case "MAYUSCULAS":
      return texto.toUpperCase(); // Convierte todo el texto en mayúsculas
    case "minusculas":
      return texto.toLowerCase(); // Convierte todo el texto en minúsculas
    case "Capitalizado":
      console.log(texto.map(palabra));
      return texto
        .split(" ") // Divide la cadena en palabras
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // map recorre cada palabra y la capitaliza
        .join(" "); // Une las palabras nuevamente en una cadena
    default:
      return "Formato no válido"; // Mensaje de error si el formato no es válido
  }
}

console.log(convertirTexto("hola mundo", "MAYUSCULAS"));
console.log(convertirTexto("Hola Mundo", "minusculas"));
console.log(convertirTexto("hola mundo, esto es más largo", "Capitalizado"));

// vamos a hacerlo sin utilizar map
function convertirTexto(texto, formato) {
  switch (formato) {
    case "MAYUSCULAS":
      return texto.toUpperCase(); // Convierte todo el texto en mayúsculas
    case "minusculas":
      return texto.toLowerCase(); // Convierte todo el texto en minúsculas
    case "Capitalizado":
      let palabras = texto.split(" "); // Divide la cadena en palabras
      console.log(palabras);
      for (let i = 0; i < palabras.length; i++) {
        palabras[i] =
          palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1); // Capitaliza cada palabra por separado y la reemplaza en el array
      }
      return palabras.join(" "); // Une las palabras nuevamente en una cadena
    default:
      return "Formato no válido"; // Mensaje de error si el formato no es válido
  }
}
console.log(convertirTexto("hola mundo", "MAYUSCULAS"));
console.log(convertirTexto("Hola Mundo", "minusculas"));
console.log(convertirTexto("hola mundo, esto es más grande", "Capitalizado"));

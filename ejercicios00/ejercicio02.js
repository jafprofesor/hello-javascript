function generarSlug(titulo) {
  // Convertimos el texto a minúsculas, reemplazamos espacios con guiones y eliminamos acentos
  return titulo
    .toLowerCase()
    .replace(/\s+/g, "-") // Reemplaza espacios con guiones
    .normalize("NFD") // Normaliza a Unicode en forma de diacríticos, es decir, elimina acentos
    .replace(/[\u0300-\u036f]/g, ""); // Elimina acentos
}

console.log(generarSlug("Título del Blog, éste es un ejemplo muy largo")); // "aprendiendo-javascript-desde-cero"

// otra forma de hacerlo, con bucles for y if
function generarSlug1(titulo) {
  let slug = "";
  for (let i = 0; i < titulo.length; i++) {
    const caracter = titulo[i].toLowerCase();
    if (caracter === " ") {
      slug += "-";
    } else if (caracter >= "a" && caracter <= "z") {
      slug += caracter;
    }
  }
  return slug;
}
console.log(generarSlug1("Título del Blog, éste es un ejemplo muy largo"));

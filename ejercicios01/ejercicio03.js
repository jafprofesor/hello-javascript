function contarPalabras(texto) {
  const palabras = texto.trim().split(/\s+/); // Divide el texto en palabras eliminando espacios extra
  return palabras.length > 50
    ? "Advertencia: la descripción es demasiado larga"
    : `Palabras: ${palabras.length}`;
}

console.log(contarPalabras("Este es un texto con pocas palabras."));
console.log(contarPalabras("Lorem ipsum dolor sit amet ".repeat(10))); // Genera más de 50 palabras

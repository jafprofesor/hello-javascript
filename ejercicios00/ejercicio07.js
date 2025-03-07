function verificarDescripcion(texto) {
  // Comprobamos si la longitud de la cadena es menor o igual a 160 caracteres
  return texto.length <= 160
    ? "Descripción válida"
    : "Excede el límite de caracteres";
}

console.log(verificarDescripcion("Esta es una descripción corta."));
console.log(
  verificarDescripcion(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at enim nec felis scelerisque gravida. Duis sit amet sodales urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at enim nec felis scelerisque gravida. Duis sit amet sodales urna"
  )
);

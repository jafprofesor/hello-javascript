function generarCodigoDescuento() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Caracteres posibles
  let codigo = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres[randomIndex]; // Añadimos un carácter aleatorio
  }
  return codigo;
}

console.log(generarCodigoDescuento()); // Ejemplo: "A1B2C3D4E5"

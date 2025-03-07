const usuariosRegistrados = new Set(["juan", "maria", "pedro"]); // Conjunto de usuarios registrados

function verificarDisponibilidad(usuario) {
  // Verificamos si el usuario ya está en el conjunto
  return usuariosRegistrados.has(usuario)
    ? "Nombre de usuario no disponible"
    : "Nombre de usuario disponible";
}

console.log(verificarDisponibilidad("juan"));
console.log(verificarDisponibilidad("carlos"));

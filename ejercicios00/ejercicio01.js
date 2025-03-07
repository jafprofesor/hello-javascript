function validarUsuario(usuario, contrasena) {
  // Verificamos si el usuario y la contraseña coinciden con los valores permitidos
  if (usuario === "admin" && contrasena === "1234") {
    return "Acceso concedido"; // Si coinciden, permitimos el acceso
  } else {
    return "Acceso denegado"; // Si no coinciden, denegamos el acceso
  }
}

console.log(validarUsuario("admin", "1234")); // "Acceso concedido"
console.log(validarUsuario("user", "pass")); // "Acceso denegado"

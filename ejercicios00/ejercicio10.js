const rolesUsuarios = new Map([
  ["admin", "Acceso total"], // Administrador con acceso total
  ["editor", "Puede editar contenido"], // Editor con permisos de edición
  ["visitante", "Solo puede ver contenido"], // Visitante con solo permisos de lectura
]);

function obtenerPermisos(usuario) {
  // Obtenemos los permisos del usuario o indicamos que el rol no es reconocido
  return rolesUsuarios.get(usuario) || "Rol no reconocido";
}

console.log(obtenerPermisos("admin")); // "Acceso total"

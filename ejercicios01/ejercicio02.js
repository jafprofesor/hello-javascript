function esEmailValido(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expresión regular para validar email
  return regex.test(email) ? "Email válido" : "Email inválido";
}

console.log(esEmailValido("usuario@dominio.com")); // "Email válido"
console.log(esEmailValido("usuario@dominio")); // "Email inválido"

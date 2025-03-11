function esSpam(comentario) {
  const palabrasSpam = ["gratis", "oferta", "dinero fácil", "descuento"];
  return palabrasSpam.some((palabra) =>
    comentario.toLowerCase().includes(palabra)
  )
    ? "Comentario sospechoso de spam"
    : "Comentario válido";
}

console.log(esSpam("Aprovecha esta gran oferta ahora mismo!")); // "Comentario sospechoso de spam"
console.log(esSpam("Me encanta este producto, lo recomiendo.")); // "Comentario válido"

function eliminarDuplicados(tags) {
  return [...new Set(tags)]; // Convierte el array en un Set y luego lo vuelve a convertir en array
}

console.log(eliminarDuplicados(["HTML", "CSS", "JavaScript", "CSS", "HTML"]));
// ["HTML", "CSS", "JavaScript"]

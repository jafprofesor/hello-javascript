const comentarios = [
  "Este producto es muy bueno",
  "La calidad es mala",
  "Me encantó, es un buen producto",
  "No me gustó, es malo",
];

// vamos a hacerlo con for e if
function resumenComentarios(comentarios) {
  let positivos = 0;
  let negativos = 0;
  for (let i = 0; i < comentarios.length; i++) {
    if (comentarios[i].includes("buen")) {
      positivos++;
    } else if (comentarios[i].includes("mal")) {
      negativos++;
    }
  }
  return {
    total: comentarios.length,
    positivos,
    negativos,
  };
}
console.log("priemra versión: " + resumenComentarios(comentarios));

// con for of
function resumenComentarios(comentarios) {
  let positivos = 0;
  let negativos = 0;
  for (let comentario of comentarios) {
    if (comentario.includes("bueno")) {
      positivos++;
    } else if (comentario.includes("malo")) {
      negativos++;
    }
  }
  return {
    total: comentarios.length,
    positivos,
    negativos,
  };
}

// con filter
function resumenComentarios(comentarios) {
  let positivos = comentarios.filter((c) => c.includes("bueno")).length; // Contamos comentarios positivos
  let negativos = comentarios.filter((c) => c.includes("malo")).length; // Contamos comentarios negativos
  return {
    total: comentarios.length, // Número total de comentarios
    positivos,
    negativos,
  };
}

console.log(resumenComentarios(comentarios));

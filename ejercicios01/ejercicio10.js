let historial = [];

function agregarBusqueda(termino) {
  // Eliminamos la búsqueda si ya existe
  historial = historial.filter((busqueda) => busqueda !== termino);
  // Añadimos la búsqueda al inicio
  historial.unshift(termino);
  // Si el historial tiene más de 5 elementos, eliminamos el último
  if (historial.length > 5) historial.pop();
}

agregarBusqueda("Zapatos");
agregarBusqueda("Camisetas");
agregarBusqueda("Relojes");
agregarBusqueda("Teclados");
agregarBusqueda("Auriculares");
agregarBusqueda("Mochilas"); // Al agregar una sexta búsqueda, la más antigua se elimina

console.log(historial); // Muestra las últimas 5 búsquedas

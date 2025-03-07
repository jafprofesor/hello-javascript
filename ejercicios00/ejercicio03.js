const preferencias = new Map(); // Creamos un mapa para almacenar las preferencias
preferencias.set("idioma", "español"); // Asignamos el idioma preferido
preferencias.set("tema", "oscuro"); // Asignamos el tema de la web

console.log("Preferencias iniciales:", preferencias);

// Modificamos una preferencia
preferencias.set("tema", "claro"); // Cambiamos el tema a claro

console.log("Preferencias actualizadas:", preferencias);

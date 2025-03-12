// Contador para mantener un registro de las modificaciones
let contadorModificaciones = 0; // Inicializa una variable global para contar cuántas veces se ha modificado el texto

// 1. Función para modificar el contenido de texto
function modificarContenidoTexto() {
  // Define una función que cambiará el contenido de texto de un elemento
  // Obtener el elemento por su ID
  const elemento = document.getElementById("texto-contenido"); // Selecciona el elemento HTML con id 'texto-contenido'
  // Incrementar el contador
  contadorModificaciones++; // Aumenta en 1 el contador cada vez que se llama a esta función
  // Modificar el contenido usando textContent
  elemento.textContent = `Texto modificado ${contadorModificaciones} veces`; // Cambia el texto del elemento mostrando el número de modificaciones
  // Mostrar en consola para demostración
  console.log("Contenido modificado usando textContent"); // Muestra un mensaje en la consola del navegador para confirmar la acción
}

// 2. Función para modificar el contenido HTML
function modificarContenidoHTML() {
  // Define una función que cambiará el contenido HTML de un elemento
  // Obtener el elemento por su ID
  const elemento = document.getElementById("html-contenido"); // Selecciona el elemento HTML con id 'html-contenido'
  // Modificar el contenido usando innerHTML para incluir etiquetas HTML
  elemento.innerHTML = `<strong>Texto en negrita</strong> con <em>énfasis</em> y <span style="color: blue;">color</span>`; // Inserta HTML formateado dentro del elemento
  // Advertencia de seguridad
  console.warn(
    "Nota: Ten cuidado con innerHTML y datos dinámicos para evitar vulnerabilidades XSS"
  ); // Muestra una advertencia en la consola sobre riesgos de seguridad
}

// 3. Función para modificar atributos
function modificarAtributos() {
  // Define una función que cambiará los atributos de un elemento
  // Obtener el elemento por su ID
  const elemento = document.getElementById("atributos"); // Selecciona el elemento HTML con id 'atributos'

  // Obtener el valor actual del atributo data-info
  const valorActual = elemento.getAttribute("data-info"); // Lee el valor actual del atributo personalizado 'data-info'
  console.log("Valor actual del atributo:", valorActual); // Muestra el valor actual en la consola

  // Establecer un nuevo valor para el atributo
  elemento.setAttribute("data-info", "nuevo-valor-" + Date.now()); // Asigna un nuevo valor al atributo usando la marca de tiempo actual

  // Mostrar el nuevo valor
  const nuevoValor = elemento.getAttribute("data-info"); // Lee el nuevo valor del atributo después de modificarlo
  elemento.textContent = `Nuevo valor del atributo: ${nuevoValor}`; // Muestra el nuevo valor dentro del elemento
}

// 4. Función para modificar una imagen
function modificarImagen() {
  // Define una función que cambiará los atributos de una imagen
  // Obtener el elemento imagen por su ID
  const imagen = document.getElementById("mi-imagen"); // Selecciona el elemento de imagen con id 'mi-imagen'

  // Alternar entre dos imágenes diferentes
  if (imagen.src.includes("150")) {
    // Comprueba si la URL actual de la imagen contiene '150'
    imagen.src = "https://picsum.photos/200/200"; // Cambia la fuente de la imagen a una imagen más grande
    imagen.alt = "Imagen aleatoria grande"; // Actualiza el texto alternativo para accesibilidad
  } else {
    imagen.src = "https://picsum.photos/150/150"; // Cambia la fuente de la imagen a una imagen más pequeña
    imagen.alt = "Imagen aleatoria pequeña"; // Actualiza el texto alternativo para accesibilidad
  }

  console.log("Imagen modificada:", imagen.src); // Muestra la nueva URL de la imagen en la consola
}

// Evento que se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Añade un evento que se dispara cuando el DOM está completamente cargado
  console.log("DOM cargado - Ejemplos de modificación listos para usar"); // Muestra un mensaje en la consola indicando que todo está listo
});

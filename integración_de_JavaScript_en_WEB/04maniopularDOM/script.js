/*
Solución: Seleccionar Elementos del DOM

Este archivo contiene la implementación completa del ejercicio,
demostrando diferentes métodos de selección de elementos del DOM.
*/

// 1. Selección por ID
// getElementById devuelve un único elemento con el ID especificado
const parrafoId = document.getElementById("parrafo-id"); // Busca y almacena el elemento con id="parrafo-id"
if (parrafoId) {
  // Verifica si el elemento existe para evitar errores
  parrafoId.textContent = "Este texto ha sido modificado usando getElementById"; // Cambia el contenido de texto del elemento
  console.log("Elemento seleccionado por ID:", parrafoId); // Muestra el elemento en la consola para depuración
}

// 2. Selección por Clase
// getElementsByClassName devuelve una HTMLCollection (colección dinámica)
const elementosClase = document.getElementsByClassName("elemento-clase"); // Obtiene todos los elementos con class="elemento-clase"
console.log("Número inicial de elementos con clase:", elementosClase.length); // Muestra la cantidad de elementos encontrados

// Convertimos la HTMLCollection a Array para poder usar forEach
Array.from(elementosClase).forEach((elemento) => {
  // Convierte la colección a un array para poder usar métodos de array como forEach
  elemento.style.border = "2px solid #2196f3"; // Aplica un borde azul a cada elemento de la colección
});
// Sin convertir a Array, se puede usar un bucle for tradicional
// for (let i = 0; i < elementosClase.length; i++) {
//   elementosClase[i].style.border = "2px solid #2196f3";
// }

// 3. Selección por Etiqueta
// getElementsByTagName devuelve una HTMLCollection de elementos con la etiqueta especificada
const spans = document.getElementsByTagName("span"); // Obtiene todos los elementos <span> del documento
console.log("Número de spans:", spans.length); // Muestra la cantidad de elementos span encontrados

for (let i = 0; i < spans.length; i++) {
  // Itera sobre cada elemento span usando un bucle for tradicional
  spans[i].style.backgroundColor = "#ffeb3b"; // Aplica un color de fondo amarillo a cada span
}

// 4. Uso de querySelector
// querySelector devuelve el primer elemento que coincide con el selector CSS
const primerParrafoEspecial = document.querySelector(".parrafo-especial"); // Obtiene el primer elemento con class="parrafo-especial"
if (primerParrafoEspecial) {
  // Verifica si se encontró algún elemento
  primerParrafoEspecial.style.fontWeight = "bold"; // Hace que el texto sea negrita
  primerParrafoEspecial.style.fontSize = "1.2em"; // Aumenta el tamaño de la fuente
  console.log("Primer párrafo especial modificado"); // Confirma la modificación en la consola
}

// 5. Uso de querySelectorAll
// querySelectorAll devuelve una NodeList (lista estática) de todos los elementos que coinciden
const todosParrafosEspeciales = document.querySelectorAll(".parrafo-especial"); // Obtiene todos los elementos con class="parrafo-especial"
console.log("Número de párrafos especiales:", todosParrafosEspeciales.length); // Muestra la cantidad de párrafos especiales

todosParrafosEspeciales.forEach((parrafo, index) => {
  // Itera sobre cada párrafo usando forEach (disponible en NodeList)
  parrafo.textContent = `Este párrafo especial (${
    index + 1
  }) fue modificado con querySelectorAll`; // Cambia el texto incluyendo su número de índice
});

// 6. Demostración de HTMLCollection vs NodeList
// Configuramos el botón para agregar divs dinámicamente
const btnAgregar = document.getElementById("btn-agregar"); // Obtiene el botón que agregará nuevos elementos
const contenedorDinamico = document.getElementById("contenedor-dinamico"); // Obtiene el contenedor donde se agregarán los nuevos elementos

// Obtenemos colecciones iniciales
const divsDinamicosHTML = document.getElementsByClassName("div-dinamico"); // Obtiene una HTMLCollection (viva) de divs dinámicos
let divsDinamicosNode = document.querySelectorAll(".div-dinamico"); // Obtiene una NodeList (estática) de divs dinámicos

// Mostramos contadores iniciales
let contadorDivs = 0; // Inicializa un contador para numerar los divs que se crearán
const actualizarContadores = () => {
  // Define una función para mostrar el estado actual de ambas colecciones
  // divsDinamicosNode = document.querySelectorAll(".div-dinamico"); // Actualiza la NodeList
  console.log("HTMLCollection length:", divsDinamicosHTML.length); // Muestra la longitud actual de la HTMLCollection
  console.log("NodeList length:", divsDinamicosNode.length); // Muestra la longitud actual de la NodeList
};

actualizarContadores(); // Llama a la función para mostrar los contadores iniciales

// Agregamos el evento click al botón
if (btnAgregar) {
  // Verifica si el botón existe
  btnAgregar.addEventListener("click", () => {
    // Añade un evento de clic al botón
    contadorDivs++; // Incrementa el contador de divs
    const nuevoDiv = document.createElement("div"); // Crea un nuevo elemento div
    nuevoDiv.className = "div-dinamico"; // Asigna la clase 'div-dinamico' al nuevo div
    nuevoDiv.textContent = `Div Dinámico ${contadorDivs}`; // Establece el texto del div con su número
    contenedorDinamico.appendChild(nuevoDiv); // Añade el nuevo div al contenedor en el DOM

    // Mostramos la diferencia entre HTMLCollection y NodeList
    console.log("\nDespués de agregar un nuevo div:"); // Muestra un mensaje separador en la consola
    actualizarContadores(); // Actualiza y muestra los contadores después de agregar el div
    console.log("HTMLCollection se actualiza automáticamente"); // Explica que HTMLCollection se actualiza solo
    console.log("NodeList mantiene su longitud original"); // Explica que NodeList no se actualiza automáticamente
  });
}

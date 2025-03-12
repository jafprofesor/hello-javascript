document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los elementos que queremos hacer clickables
  const elementos = document.querySelectorAll(
    ".abuelo, .padre, .elemento-actual, .hermano"
  );
  const infoPanel = document.getElementById("info-navegacion");

  // Añadir evento de click a cada elemento
  elementos.forEach((elemento) => {
    elemento.addEventListener("click", function (e) {
      e.stopPropagation(); // Evitar que el click se propague a elementos padres

      // Eliminar la clase 'highlight' de todos los elementos
      elementos.forEach((el) => el.classList.remove("highlight"));

      // Añadir la clase 'highlight' solo al elemento clickeado
      this.classList.add("highlight");

      // Mostrar información sobre el elemento en el panel
      mostrarInformacionElemento(this);
    });
  });

  function mostrarInformacionElemento(elemento) {
    // Obtener información del elemento
    const id = elemento.id || "Sin ID";
    const clases = elemento.className || "Sin clases";
    const tipo = elemento.tagName.toLowerCase();

    // Obtener información de navegación DOM
    const padre = elemento.parentElement
      ? `${elemento.parentElement.tagName.toLowerCase()}${
          elemento.parentElement.id ? " #" + elemento.parentElement.id : ""
        }${
          elemento.parentElement.className
            ? " ." + elemento.parentElement.className.replace(/\s+/g, " .")
            : ""
        }`
      : "Ninguno";

    const hermanoAnterior = elemento.previousElementSibling
      ? `${elemento.previousElementSibling.tagName.toLowerCase()}${
          elemento.previousElementSibling.id
            ? " #" + elemento.previousElementSibling.id
            : ""
        }${
          elemento.previousElementSibling.className
            ? " ." +
              elemento.previousElementSibling.className.replace(/\s+/g, " .")
            : ""
        }`
      : "Ninguno";

    const hermanoSiguiente = elemento.nextElementSibling
      ? `${elemento.nextElementSibling.tagName.toLowerCase()}${
          elemento.nextElementSibling.id
            ? " #" + elemento.nextElementSibling.id
            : ""
        }${
          elemento.nextElementSibling.className
            ? " ." + elemento.nextElementSibling.className.replace(/\s+/g, " .")
            : ""
        }`
      : "Ninguno";

    // Mostrar la información en el panel
    infoPanel.innerHTML = `
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Clases:</strong> ${clases}</p>
            <p><strong>Tipo de elemento:</strong> ${tipo}</p>
            <p><strong>Elemento padre:</strong> ${padre}</p>
            <p><strong>Hermano anterior:</strong> ${hermanoAnterior}</p>
            <p><strong>Hermano siguiente:</strong> ${hermanoSiguiente}</p>
        `;
  }
});

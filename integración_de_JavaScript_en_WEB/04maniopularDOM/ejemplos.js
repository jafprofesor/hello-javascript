// 1. Seleccionar un elemento por su ID y cambiar su contenido
document.addEventListener("DOMContentLoaded", () => {
  // Ejemplo 1: getElementById
  const miDiv = document.getElementById("miDiv");
  miDiv.textContent = "Contenido actualizado";

  // Ejemplo 2: getElementsByClassName
  const elementosClase = document.getElementsByClassName("miClase");
  for (let i = 0; i < elementosClase.length; i++) {
    elementosClase[i].style.backgroundColor = "yellow";
  }

  // Ejemplo 3: getElementsByTagName
  let parrafosOcultos = true;
  window.mostrarParrafos = () => {
    const elementosTag = document.getElementsByTagName("p");
    for (let i = 0; i < elementosTag.length; i++) {
      elementosTag[i].style.display = parrafosOcultos ? "block" : "none";
    }
    parrafosOcultos = !parrafosOcultos;
  };

  // Ejemplo 4: querySelector
  const primerElemento = document.querySelector(".miClase");
  primerElemento.textContent = "Primer elemento actualizado";

  // Ejemplo 5: querySelectorAll
  const todosLosElementos = document.querySelectorAll(".miClase");
  todosLosElementos.forEach((elemento) => {
    elemento.classList.add("nuevaClase");
  });

  // Ejemplo 6: createElement
  const nuevoElemento = document.createElement("p");
  nuevoElemento.textContent = "Nuevo párrafo";
  document.getElementById("contenedor").appendChild(nuevoElemento);

  // Ejemplo 7: remove
  window.eliminarElemento = () => {
    const elementoAEliminar = document.getElementById("elementoAEliminar");
    if (elementoAEliminar) {
      elementoAEliminar.remove();
    }
  };

  // Ejemplo 8: Cambiar atributos
  let imagenAlternada = false;
  window.cambiarImagen = () => {
    const miImagen = document.getElementById("miImagen");
    if (imagenAlternada) {
      miImagen.src = "https://via.placeholder.com/150";
    } else {
      miImagen.src = "https://via.placeholder.com/150/ff0000";
    }
    imagenAlternada = !imagenAlternada;
  };

  // Ejemplo 9: Eventos
  const miBoton = document.querySelector(".miBoton");
  miBoton.addEventListener("click", () => {
    alert("Botón clickeado");
  });

  // Ejemplo 10: Cambiar estilos
  const titulos = document.getElementsByTagName("h1");
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].style.fontFamily = "Arial, sans-serif";
    titulos[i].style.color = "#2196f3";
  }

  // Ejemplo 11: Cambiar tamaño de fuente
  const parrafos = document.querySelectorAll(".miParrafo");
  parrafos.forEach((parrafo) => {
    parrafo.style.fontSize = "20px";
    parrafo.style.color = "#4caf50";
  });

  // Ejemplo 12: Atributos personalizados
  const nuevoElementoAtributo = document.createElement("div");
  nuevoElementoAtributo.textContent =
    "Nuevo elemento con atributo personalizado";
  nuevoElementoAtributo.setAttribute("data-atributo", "valor");
  document
    .getElementById("contenedorAtributo")
    .appendChild(nuevoElementoAtributo);
});

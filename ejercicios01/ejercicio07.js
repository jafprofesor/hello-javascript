const productos = [
  { nombre: "Teclado", categoria: "Electrónica" },
  { nombre: "Zapatillas", categoria: "Moda" },
  { nombre: "Ratón", categoria: "Electrónica" },
  { nombre: "Camiseta", categoria: "Moda" },
];

function agruparPorCategoria(productos) {
  const categorias = new Map();
  productos.forEach(({ nombre, categoria }) => {
    if (!categorias.has(categoria)) {
      categorias.set(categoria, []); // Creamos la categoría si no existe
    }
    categorias.get(categoria).push(nombre); // Añadimos el producto a la categoría
  });
  return categorias;
}

console.log(agruparPorCategoria(productos));

let ciudades = ["Barcelona", "Valencia", "Sevilla"];
console.log(ciudades.includes("Madrid")); // false
console.log(ciudades.includes("Sevilla")); // true
console.log(ciudades.includes("sevilla")); // false
console.log(ciudades.map((ciudad) => ciudad.toLowerCase()).includes("sevilla")); // true
console.log(
  ciudades.map((ciudad) => ciudad.toUpperCase()).includes("VALENCIA")
); // true

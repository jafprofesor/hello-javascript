let frutas = ["Manzana", "Banana", "Naranja"];
frutas.push("Uva"); // Agrega una nueva fruta al final
frutas.shift(); // Elimina el primer elemento

console.log(frutas); // ["Banana", "Naranja", "Uva"]

let frutaQuitada = frutas.pop(); // Elimina el último elemento
console.log(frutaQuitada); // "Uva"
console.log(frutas); // ["Banana", "Naranja"]

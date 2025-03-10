let notas = new Map();
notas.set("Pedro", 8);
notas.set("María", 9);
notas.set("Luis", 7);

console.log(notas.get("María")); // 9

let notas2 = new Map([
  ["Pedro", 8],
  ["María", 9],
  ["Luis", 7],
]);

console.log(notas2.get("María")); // 9
console.log(notas2); // Map { 'Pedro' => 8, 'María' => 9, 'Luis' => 7 }

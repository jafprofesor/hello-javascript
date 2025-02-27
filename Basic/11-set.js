/*
Clase 26 - Sets 
*/

// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Juan", "Antonio", "jaf", 37, true, "juanprofesor@proton.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://juanprofesor.com")

console.log(mySet)

mySet.delete("https://juanprofesor.com")

console.log(mySet)

console.log(mySet.delete("Juan"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Juan"))
console.log(mySet.has("Antonio"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("juanprofesor@proton.com")
mySet.add("juanprofesor@proton.com")
mySet.add("juanprofesor@proton.com")
mySet.add("juanprofesor@proton.com")
console.log(mySet)

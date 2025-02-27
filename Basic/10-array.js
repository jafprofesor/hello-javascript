/*
Clase 25 - Arrays
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Juan", "Antonio", "jaf", 37, true]
myArray2 = new Array("Juan", "Antonio", "jaf", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Juan"
// myArray2[0] = "Antonio"
myArray2[1] = "jaf"
myArray2[4] = "jaf"

console.log(myArray2)

myArray = []
myArray[2] = "juan"
// myArray[0] = "Antonio"
myArray[1] = "jaf"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Juan")
myArray.push("Antonio")
myArray.push("jaf")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Juan", "jaf")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Juan", "Antonio", "jaf", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Juan", "Antonio", "jav", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)

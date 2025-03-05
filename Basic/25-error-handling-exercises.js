/*
Clase 41 - Ejercicios: Manejo de errores
*/

// 1. Captura una excepción utilizando try-catch
let a = 1;
try {
  a(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
}

// 2. Captura una excepción utilizando try-catch y finally
let b = 1;
try {
  b(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
} finally {
  console.log("Finalmente"); // Se ejecuta siempre
}

// 3. Lanza una excepción genérica
let c = 1;
try {
  c(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
} // No se necesita finally   // Se ejecuta siempre

// 4. Crea una excepción personalizada
let d = 1;
try {
  d(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
} // No se necesita finally   // Se ejecuta siempre

// 5. Lanza una excepción personalizada
let e = 1;
try {
  e(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
} // No se necesita finally   // Se ejecuta siempre

// 6. Lanza varias excepciones según una lógica definida
let f = 1;
try {
  f(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
} // No se necesita finally   // Se ejecuta siempre

// 7. Captura varias excepciones en un mismo try-catch
let g = 1;
try {
  g(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
} // No se necesita finally   // Se ejecuta siempre

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let h = 1;
try {
  h(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
} // No se necesita finally   // Se ejecuta siempre

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
let i = 1;
try {
  i(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
} // No se necesita finally   // Se ejecuta siempre

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
let j = 1;
try {
  j(); // Esto lanzará un error
} catch (error) {
  // Captura el error
  console.error("Error:", error); // Muestra el error
} // No se necesita finally   // Se ejecuta siempre

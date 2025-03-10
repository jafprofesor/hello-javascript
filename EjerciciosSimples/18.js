let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}
let a = 1;
a++; // a = a + 1 post-incremento, primero se usa el valor de a y luego se incrementa
console.log(a); // 2

++a; // a = a + 1 pre-incremento, primero se incrementa el valor de a y luego se usa
console.log(a); // 3

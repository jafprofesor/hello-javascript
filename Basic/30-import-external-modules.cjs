/*
Clase 44 - Módulos 
*/

// Módulos externos
// Para importar módulos externos, se utiliza la función require().
// Ejemplo: importar el módulo 'os' de Node.js

const os = require("os"); // Importa el módulo 'os' de Node.js

console.log(os.platform()); // Imprime el sistema operativo
console.log(os.release()); // Imprime la versión del sistema operativo
console.log(os.cpus()); // Imprime la información de la CPU
console.log(os.hostname()); // Imprime el nombre del host
console.log(os.networkInterfaces()); // Imprime las interfaces de red
console.log(os.homedir()); // Imprime el directorio home
console.log(os.tmpdir()); // Imprime el directorio temporal
console.log(os.type()); // Imprime el tipo de sistema operativo
console.log(os.uptime()); // Imprime el tiempo de actividad del sistema
console.log(os.userInfo()); // Imprime la información del usuario
console.log(os.version()); // Imprime la versión de Node.js
console.log(os.arch()); // Imprime la arquitectura del sistema
console.log(os.totalmem()); // Imprime la memoria total del sistema
console.log(os.freemem()); // Imprime la memoria libre del sistema

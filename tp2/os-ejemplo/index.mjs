import os from 'os';

//Obtener la arquitectura del sistema 

console.log('Arquitectura: ' ,os.arch());

//Obtener el tipo del sistema operativo

console.log('Plataforma: ' ,os.platform());

//Obtener la cantitad total de memoria 

console.log('Memoria total: ' ,os.totalmem());

//Obtener la cantidad de memoria libre

console.log('Memoria libre: ' ,os.freemem());

//Obtener la informacion del CPU

console.log('Informacion del CPU: ' ,os.cpus());
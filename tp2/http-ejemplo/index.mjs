import http from 'http';

//Crear un servidor HTTP basico 

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo!\n');
})

//Configurar el servidor para que escuche en el puerto 3000

server.listen(3000,'127.0.0.1', () => {
    console.log('El servidor está corriendo en http://127.0.0.1:3000/');
});
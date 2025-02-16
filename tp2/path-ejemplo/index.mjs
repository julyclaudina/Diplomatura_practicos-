import path from "path";

// Definir una ruta de archivo de ejemplo

const filePath = './dato/ejemple.txt';

//obtener el directorio base
const dirname = path.dirname (filePath);
console.log ('Directorio base:' , dirname);

//obtener el nombre del archivo sin extensión 
const baseName = path.basename (filePath, '.txt');
console.log('Nombre del archivo: ', baseName);

//obtener la extensión del archivo
const extName = path.extname(filePath);
console.log('extensión del archivo:', extName);

//Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log ('nueva ruta: ', newPath);


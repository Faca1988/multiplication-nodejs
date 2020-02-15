// REQUIREDS
// const fs = require('fs'); // propio de node. se invoca la libreria y nada mas...
// const fs = require('express'); // librerias de terceros ajenos a node. paquetes instalables y luego invocables
// const fs = require('../fs'); // librerias de nuestra creacion. se invocan con rutas relativas
// const multiplicar = require('./multiplicar/multiplicar.js');
const colors = require('colors');
const { argv } = require('./config/yargs-config.js');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js'); // destructuracion aplicada a la llamada de la funcion

// console.log(process.argv);


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// let argv2 = process.argv;
// console.log(`la base introducida es ${argv.base}`);
// console.log(argv2);


let comando = argv._[0];


// let base = 3;
// let data = '';

// for (let idx = 1; idx <= 10; idx++) {
//     data += `${base} * ${idx} = ${base*idx}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));


switch (comando) {

    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(resp => {
                console.log("=======================".green);
                console.log(`Base: ${argv.base}`.yellow);
                console.log("=======================".green);
                console.log(resp);
            })
            .catch(err => console.log(err.red));
        break;
    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err.red));
        break;
    default:
        console.log('Comando no reconocido'.red);

}
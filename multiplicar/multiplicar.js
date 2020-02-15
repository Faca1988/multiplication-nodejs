// REQUIRED
const fs = require('fs');


// FUNCTIONS
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ingresada (${base}) no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ingresado (${limite}) no es un numero`);
            return;
        }

        let data = '';

        for (let idx = 1; idx <= limite; idx++) {
            data += `${base} * ${idx} = ${base*idx}\n`;
        }

        resolve(data);

    });

};


crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ingresada (${base}) no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ingresado (${limite}) no es un numero`);
            return;
        }

        let data = '';

        for (let idx = 1; idx <= limite; idx++) {
            data += `${base} * ${idx} = ${base*idx}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
};

// EXPORTS
module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
};
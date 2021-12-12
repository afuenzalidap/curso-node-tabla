const fs = require('fs');
require('colors');

const crearArchivo = async(base, listar, hasta) => {
    let salida = '';

    console.clear();

    for(let i = 1; i <= hasta; i++) {
        salida += (`${ base } x ${i} = ${base * i}\n`);
    }

    if(listar) {
        console.log('===================='.green);
        console.log(`Tabla del ${base}`.red);
        console.log('===================='.green);
        console.log(salida.rainbow);
    }

    return new Promise((resolve, reject) => {   
        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
            if(err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo
}
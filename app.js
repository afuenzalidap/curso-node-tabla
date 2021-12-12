const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

console.clear();

console.log(argv);
console.log(`base: yargs ${argv.base}`);

crearArchivo( argv.b, argv.l, argv.h )
    .then( archivo => console.log(`Archivo creado: ${ archivo }`) )
    .catch( err => console.log(err) );




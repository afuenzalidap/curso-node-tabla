const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Muestra la base de la table'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Listar las bases de las tablas de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Indica el máximo de la tabla'
                })
                .check((argv,options) => {
                    if( isNaN( argv.b ) ){
                        throw new Error('El base tiene que ser un numero');
                    }

                    return true;
                })
                .argv;

module.exports = {
    argv
};
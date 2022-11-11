const argv = require('yargs')
                .option('a',{
                    alias: 'base-desde',
                    type:'number',
                    demandOption: true,
                    describe: 'Es la base desde de la tabla de multiplicar'
                })
                .option('b',{
                    alias: 'base-hasta',
                    type:'number',
                    demandOption: false,
                    default: 10,
                    describe: 'Es la base hasta de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type:'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check( (argv,options) => {
                    if( isNaN( argv.b ) || isNaN( argv.a ) ){
                        throw 'Las bases tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;
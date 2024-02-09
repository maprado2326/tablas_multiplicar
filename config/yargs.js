const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'base de la tabla de multiplicar'
    })
    .option('v',{
        alias: 'v',
        type: 'boolean',
        default: 'false',
        describe: 'visualizar tabla en consola'
    })
    .check( ( argv, options ) =>{
        if ( isNaN( argv.b ) ){
            throw 'La base no es un número';
        }
        return true;
    } )
    .argv;

module.exports = argv;
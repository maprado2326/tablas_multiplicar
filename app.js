const { crearArchivo } = require("./helpers/multiplicar");
require('colors');
const argv = require("./config/yargs");

crearArchivo( argv.b, argv.v )
   .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado') )
   .catch( err => console.log( err ) );
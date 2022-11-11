const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors/safe');


console.clear();



// console.log(process.argv);

//desestructuracion (comentado porque usare yargs.. que es una libreria que facilita todo esto)
// const [ , , arg3='base=8' ] = process.argv;
// const [ , base = 8 ] = arg3.split('=');
// console.log( base );

// console.log(process.argv);
console.log('===========Bienvenido al Sistema===================');
console.log(colors.yellow(argv));
// console.log('base: yargs', argv.b);



crearArchivo( argv.a, argv.b, argv.l )
    .then( nombreArchivo =>  console.log(nombreArchivo,'creado') )
    .catch( console.log );
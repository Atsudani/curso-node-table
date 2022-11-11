const fs = require('fs'); //importamos la libreria
const colors = require('colors/safe');
const { error } = require('console');


const crearArchivo = async( baseDesde = 1, baseHasta = 10, listar = false) => {
    try {
        let salida = '';
        let mensaje = '';
        let desde = baseDesde;
        let hasta = baseHasta;

        for (let i = desde; i <= hasta; i++) {
            
            salida = '';
            salida += `================================\nTabla de multiplicacion de ${ i }\n================================\n`;
            for (let j = 0; j < 10; j++) {
                salida += `${ i } x ${j+1} = ${ i * (j+1) }\n`;
            }
            salida += `================================\n`;

            

            fs.writeFileSync(`./salida/tabla-${ i }.txt`, salida);

            if (listar) {
                console.log( colors.cyan(salida));
            }

            mensaje += `tabla-${ i }.txt `;
            
        }

        

        return colors.rainbow(mensaje);    
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, visible = false ) => {

    try {
        
        let plantillaTabla = 
        `-----------------------------------------------------------------------------------
                                        Tabla del ${colors.blue( base )}
        -----------------------------------------------------------------------------------
        `;

        for ( let i = 1; i <= 10; i++ ){
            plantillaTabla += `${ base } ${ 'x'.green } ${i} = ${ ( base * i ) }${ ( i != 10 ) ? '\n' : '' }`;
        }
        
        if ( visible === true ) {
            console.clear()
            console.log(plantillaTabla);
        }
        
        fs.writeFileSync(`Tabla_de_multiplicar_del_${base}.csv`, plantillaTabla);
        
        return `Tabla_de_multiplicar_del_${base}.csv`;

    } catch (err) {
        return err;
    }

}

module.exports = { crearArchivo };
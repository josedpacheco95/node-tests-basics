const fs = require('fs');
leer = (ruta,cb) =>{
    fs.readFile(ruta, (err, data) =>{
        console.log(data.toString());
    })
}

escribir = (ruta,contenido,cb) => {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('No he podido escribirlo', err)
        } else {
            console.log('Se ha escrito correctamente');
        }
    })
}

borrar = (ruta, cb) => {
    fs.unlink(ruta, cb);
}
//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
//leer(__dirname+ '/archivo.txt', console.log);
borrar(__dirname + '/archivo1.txt',console.log);
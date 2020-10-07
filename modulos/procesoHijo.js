const { exec, spawn } = require('child_process');
const { POINT_CONVERSION_COMPRESSED } = require('constants');

/*
exec('node ../async/promise.js',(err,stdout,sterr) =>{
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
})
*/

let proceso = spawn('cmd.exe', ['/c','dir']);
console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on('data',function (dato){
    console.log(process.killed);
    console.log(dato.toString());
})
proceso.on('exit', function() {
    console.log('el proceso termino');
    console.log(process.killed);
})
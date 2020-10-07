function hola(nombre,callback) {
    setTimeout(() => {
     console.log('Hola, ',nombre)
     callback(nombre);
    }, 1000); 
    
 }

 hablar = (callback) => {
     setTimeout(function(){
         console.log('Bla bla bla bla...');
         callback();
     },1000)

 }
 
 adios = (nombre,callback) => {
    setTimeout(function(){
       console.log('Adios',nombre);
       callback();
    },1000)
 }

 conversacion = (nombre, veces, callback) => {
    if (veces >=0) {
        hablar(function () {
            conversacion(nombre, --veces, callback)
        })
    } else {
        adios(nombre,callback);
    }
 }

 console.log('Iniciando proceso...');
hola('Carlos', function (nombre) {
    conversacion(nombre,5,function (){
        console.log('Proceso terminado...')
    });
})
 
/*console.log('Iniciando proceso...');
 hola('Carlos',function(nombre){
    hablar(function () {
        hablar(function () {
            hablar(function () {
                adios(nombre, function(){
                   console.log('Terminando proceso...')
                });
            })
        })
    })
 });*/

 

 
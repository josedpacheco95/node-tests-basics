function hola(nombre) {
    return new Promise(function (resolve,reject){
        setTimeout(() => {
         console.log('Hola, ',nombre);
         resolve(nombre);
        }, 1500); 
    });
 }

 hablar = (nombre) => {
     return new Promise(function (resolve,reject) {
         setTimeout(function(){
             console.log('Bla bla bla bla...');
             resolve(nombre);
         },1000);
     })
 }
 
 adios = (nombre) => {
     return new Promise((resolve,reject) => {
         setTimeout(function(){
            console.log('Adios',nombre);
            resolve();
         },1000);
     })
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

 //--
console.log('Iniciando el proceso...');
 hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log('Terminando el proceso');
    })

async function hola(nombre) {
    return new Promise(function (resolve,reject){
        setTimeout(() => {
         console.log('Hola, ',nombre);
         resolve(nombre);
        }, 1500); 
    });
 }

 hablar = async (nombre) => {
     return new Promise(function (resolve,reject) {
         setTimeout(function(){
             console.log('Bla bla bla bla...');
             resolve(nombre);
         },1000);
     })
 }
 
 adios = async (nombre) => {
     return new Promise((resolve,reject) => {
         setTimeout(function(){
            console.log('Adios',nombre);
            resolve();
         },1000);
     })
 }

 async function main() {
     let nombre = await hola('Carlos');
     await hablar();
     await hablar();
     await hablar();
     await adios(nombre);
     console.log('Terminamos el proceso');
 }
 console.log('Empezamos el proceso');
 main();
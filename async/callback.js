function hola(nombre,callback) {
   setTimeout(() => {
    console.log('Hola, ',nombre)
    callback(nombre);
   }, 1000); 
   
}

adios = (nombre,callback) => {
   setTimeout(function(){
      console.log('Adios',nombre);
      callback();
   })
}

console.log('Iniciando proceso...');
hola('Carlos',function(nombre){
   adios(nombre, function(){
      console.log('Terminando proceso...')
   });
});

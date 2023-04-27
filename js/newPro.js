const getUsuarioActivo=(nombre)=> ({    id:'ABC123', username:nombre});
const usuarioActivo =getUsuarioActivo('fernando');
console.log(usuarioActivo);

const persona ={
    nombre:'Tony',
    edad:45,
    clave:'Iroman'
}
const {nombre} = persona;
console.log(nombre );
const{edad}=persona
console.log(edad);
const useContex=({clave,nombre, edad, rango ='capitan'})=>{
    return{
        usuario:nombre,
        cargo : rango,
        nombreClave:clave,
        años:edad,
        lating:{
            lat:14.3432,
            lgn:-12.3432
        }
    }
}
const{nombreClave,años,usuario,cargo,lating:{lat,lgn}}=useContex(persona);
console.log(nombreClave,años,usuario,cargo);
console.log(lat,lgn);

const promeso =new Promise ((resulta,rechazada)=>{

    // contenido
})


// promesas
const pedirAumento = new Promise ((resolve, reject)=>{
    const tiempo = 10;
    if (tiempo >=10){
        resolve ('ya tengo el tiempo para pedir un aumento de sueldo')
    }
    else{
        reject('todavia no puedo pedir aumento no tengo la antiguedad ')
    }
})
console.log(pedirAumento);

pedirAumento
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })
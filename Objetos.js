var nombre='maria'
var nombre='maria'
var nombre='juan'
var nombre='juan1'
console.log(nombre);
console.log(nombre);
console.log(nombre);
var nombre='oscar'
console.log(nombre);
let nombre1='maria'
nombre1='juan'
console.log(nombre1);
let nombre2='josee'
{
 console.log(nombre2);
 let nombre3='pepito'
 console.log(nombre3);
}

const numero=3
numero=5
console.log(numero);

//! Objetos

const rectangulo={
    ancho:7,
    alto:6,
    cuadrado:{
        anchoC:6,
        altoC:6,
    }
}
console.log(rectangulo);
console.log(rectangulo.alto);
console.log(rectangulo.ancho);
console.log(rectangulo.cuadrado.altoC);

const persona={
    name:'Juan',
    age: 28,
    country:"Mexico",
    hobbies:['correr','dibujar','leer'],
}
console.log(persona);
console.log(persona.age=29);
console.log(persona);
console.log(persona.hobbies);

let persona1={
    name:'Maria',
    age: 40,
    country:"España",
    address:{
        street:'Calle XYZ #123',
        city:'Madrid',
        zipcode: '2800'
    }
}
let persona123=['Maria',40,'España']
//! Object entries
let entries= Object.entries(persona1)
console.log(entries);
//! Object.values 
const values= Object.values(persona1)
console.log(values);

//! Object.keys 
const keys= Object.keys(persona1)
console.log(keys);

let mascota={
    type:'perro',
    breed:'Labrador Retriever',
    color:'canela y blanco',
    nickname:'Firulais',
}







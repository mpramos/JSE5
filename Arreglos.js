//! Arreglos
let nombre0='maria'
let nombre1='esteban'
let nombre2='juan'

console.log(nombre0); 
console.log(nombre1); 
console.log(nombre2); 
//* Creación de arreglos
let arr=Array()
console.log(arr);
let arr1=[]
console.log(arr1);
let numeros=[1,2,3,4,5,6]
console.log(numeros);
let frutas=['platano','frutilla','naranaj']
console.log(frutas);
let persona=['Maria', true,123,'😁']
console.log(persona);
//?Split
let js='JavaScript'
let caracterenJavaScript=js.split('')
console.log(caracterenJavaScript);
//! Accediendo a los elementos de mi arreglo
let frutas1=['banana','orange','mango','lemon','mango','mango','mango','mango','mango','mango','mango','frutilla','piña']

let primerElemento=frutas1[3]
let ultimoIndice=frutas1.length-1 //12
console.log('ultimo indice ', ultimoIndice);
let ultimoElemento=frutas1[ultimoIndice]
console.log(primerElemento);
console.log(ultimoElemento);
//? length
console.log(frutas1.length)

//! Modificar elementos del arreglo
let numeros1=[1,2,3,4,5]
console.log('antes ',numeros1);
numeros1[0]=10
numeros1[1]=20
console.log('despues ',numeros1);
//! Metodos para manipular arreglos
// : push(), pop(), shift(), unshift().......
let arreglo=Array(8)
console.log(arreglo);
let ochoValores=Array(8).fill('X')
console.log(ochoValores);
//! concat
// () me permite concatenar dos arrays en uno nuevo
let primero=[1,2,3,4,5,6,7,8]
let segundo=[11,22,33,44,55,66,77,88]
let resultadoConcatenacion=primero.concat(segundo)
console.log(resultadoConcatenacion);
//! indexOf
let numeros2=[1,2,3,4,5,3]
console.log("indice ",numeros2.indexOf(9));
console.log("indice ",numeros2.indexOf(3));
//! lastIndexOf
//* busca el último índice que coincide con el elemento
console.log("indice ",numeros2.lastIndexOf(3));
//! Comprobar un arreglo
//? Array.isArray 
let numeros3=[1,2,3,4,5,3]
let numero4=100
console.log(Array.isArray(numeros3));
console.log(Array.isArray(numero4));
//! Join
let numeros5=[1,2,3,4,5]
console.log(numeros5.join());
console.log(numeros5.join(''));
console.log(numeros5.join(' '));
console.log(numeros5.join('#'));
//! Cortar elemnentos
//?slice
let numeros6=[1,2,3,4,5]
console.log(numeros6.slice());
console.log(numeros6.slice(1,4));
console.log(numeros6);
//? splice
let numeros7=[1,2,3,4,5]
console.log(numeros7.splice()) // elimina todos los valores de la posición
console.log(numeros7.splice(0,1)) // elimina todos los valores de la posición
console.log(numeros7);

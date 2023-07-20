
//! Callback

let multiplicacion = (a,b)=>{return a * b }
let division = (a,b)=>{return a /b }
console.log(suma(2,3));
console.log(resta(2,3));
console.log(multiplicacion(2,3));
console.log(division(2,3));

let suma = (a,b)=>{return a +b }
const calcularOperacion=(callback)=>{ return callback }
console.log(calcularOperacion(suma(2,3)));
let resta = (a,b)=>{return a - b }
const calcularOperacion1=(callback)=>{ return callback }
console.log(calcularOperacion1(()=> console.log(2)));

//! Programacion Funcional

const numeros=[1,2,3,4,5]

numeros.forEach(n=>console.log(n))
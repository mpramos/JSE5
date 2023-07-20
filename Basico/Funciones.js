function suma(numero1,numero2) {
    console.log(numero1+numero2);
}
suma(1,2)

{
    suma(2,4)
}
// Función de declaración
// Función de expresión
// Función anónima
// Función de flecha
//! Función de declaración

function cuadrado() {
    let nume=2
    let cuadrado= nume*nume
    console.log(cuadrado);
}
cuadrado()

function cuadradoReturn() {
    let nume=3
    let cuadrado= nume*nume
    return cuadrado
}
console.log(cuadradoReturn());
function resta(numeroA,numeroB) {
    return numeroA-numeroB
}
console.log(resta(2,1));

function sumarTodosNumeros() {
    let suma=0
    for (let i = 0; i < arguments.length ;i++) {
        suma=suma+arguments[i]
    }
    return suma
}
console.log(sumarTodosNumeros(1,2,3,4))

//!Función anónima
let funcionAnonima= function () {
    console.log('Hola soy una funcion anonima');
}
funcionAnonima()

//!Función de expresión
const cuadrado= function (n) {
    return n*n
}
console.log(cuadrado(2));
//! Funciones de autoinvocación
(function (n) {
    console.log(n*n);
})(3)

let cuadradoNumero= (function(n) {
    return n*n
})(4)
console.log(cuadradoNumero);
//! función de flecha

function cudrado(n) {
    return n*n
}
console.log(cudrado(2));

const cuadrado1=n=> n*n
console.log("Resultado:",cuadrado1(5));
//!Función con parámetros por defecto

function saludo(name='Maria') {
    return `${name} Hola 👋🏻`
}
console.log(saludo('Pedro'));
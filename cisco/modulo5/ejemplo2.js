//* Recursividad
//* Funciones como miembros de primera clase
//* Expresiones de funciones
//* Callbacks síncronas
//* Callbacks asíncronas
//* Funciones arrow
//! Validación de parámetros
function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20
//! Recursividad
function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(6)); // -> 720

//! Factorial
function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(6)); // -> 720

//!Funciones como miembro de primera clase
function showMessage(message) {
    console.log(`Mensaje: ${message}`);
}

let sm = showMessage;
sm("¡Esto funciona!"); // -> Mensaje: ¡Esto funciona!
console.log(typeof sm); // -> function


function doNothing() {
    return undefined;
}

let a = doNothing(); // asignar el resultado de la llamada de función
let b = doNothing;   // asignar una función

console.log(typeof a); // -> undefined
console.log(typeof b); // -> function

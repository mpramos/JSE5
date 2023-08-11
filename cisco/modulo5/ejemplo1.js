//* ¿Qué son las funciones?
//* Declaración de funciones
//* Invocación de funciones
//* Variables locales
//* La sentencia return
//* Parámetros de funciones
//* Sombreado
//* Validación de parámetros


//! SIN FUNCIONES

let Temperatures;
let Sum;
let MeanTemp;

Temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
Sum = 0;
for (let i = 0; i < Temperatures.length; i++) {
Sum += Temperatures[i];
}
MeanTemp = Sum / Temperatures.length;
console.log(`mean: ${MeanTemp}`); // -> media: 16.666666666666668

Temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
Sum = 0;
for (let i = 0; i < Temperatures.length; i++) {
Sum += Temperatures[i];
}
MeanTemp = Sum / Temperatures.length;
console.log(`mean: ${MeanTemp}`); // -> media: 18.083333333333332

//! CON FUNCIONES
//! SINTAXIS
function functionName() {
    código
 }
 

let temperatures;
let meanTemp;

function getMeanTemp() {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;    
}
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332


//? Primera forma
let name = 'Alice'

function showName() {
    console.log(name);
}

showName(); // -> Alice

//? Segunda forma
let nameA = 'Alice'

showNameA(); // -> Alice
function showNameA() {
    let nameA = 'Alice'
    console.log(nameA);
}



//? Sentencia return 
function showMsg() {
    console.log("mensaje 1");
    return;
    console.log("mensaje 2");
}

showMsg(); // -> mensaje 1

//? Sentencia return continuacion
let _temperatures;
let _meanTemp;

function getMeanTemp() {
    let sum = 0;
    let result;
    for (let i = 0; i < _temperatures.length; i++) {
        sum += _temperatures[i];
    }
    result = sum / _temperatures.length;
    return result;  
}

_temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
_meanTemp = getMeanTemp();
console.log(`mean: ${_meanTemp}`);

_temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
_meanTemp = getMeanTemp();
console.log(`mean: ${_meanTemp}`);

//?
let __temperatures;

function getMeanTemp() {
    let sum = 0;
    for (let i = 0; i < __temperatures.length; i++) {
        sum += __temperatures[i];
    }
    return sum / __temperatures.length;
}

__temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp()}`);

__temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp()}`);

//! PARÁMETROS

function add(first, second) {
    return first + second;
    }
    let result = add(5, 7);
    console.log(result); // -> 12
        

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(day1)}`); // -> mean:
16.666666666666668    

//? Sombreado
let a = 100, b = 200, c = 300;

function test(a) {
    let b = 10;
    console.log(a); // parameter a
    console.log(b); // local variable b
    console.log(c); // global variable c
}

test(1);        // -> 1
                // -> 10
                // -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300

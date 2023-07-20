let year = 1990;
console.log(typeof year); // -> number
console.log(typeof 1991); // -> number

let name = "Alice";
console.log(typeof name); // -> string
console.log(typeof "Bob"); // -> string

let typeOfYear = typeof year;
console.log(typeOfYear); // -> number
console.log(typeof typeOfYear); // -> string


let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false); // -> false
console.log(typeof false); // -> boolean
console.log(isDataValid); // -> true
console.log(typeof isDataValid); // -> boolean


let a = 10; // decimal - default 
let b = 0x10; // hexadecimal 
let c = 0o10; // octal 
let d = 0b10; // binary 
 
console.log(a); // -> 10 
console.log(b); // -> 16 
console.log(c); // -> 8 
console.log(d); // -> 2 

let x = 9e3;
let y = 123e-5;
console.log(x); // -> 9000
console.log(y); // -> 0.00123


let message1 = "El buque 'Mars' hizo escala en el puerto.";
let message2 = 'El ciclón "Cilida" pasará cerca de Mauritius.';

console.log(message1); // -> El buque 'Mars' hizo escala en el puerto.
console.log(message2); // -> El ciclón "Cilida" pasará cerca de Mauritius.

let path = "C:\\Windows" - "Windows";
console.log(path); // -> NaN

let test = "100" + "10";
console.log(test); // -> 90
console.log(typeof test); // -> number


let country = "Malawi";
let continent = "Africa";

let sentence = ` ${country} se ubica en ${continent}.`;
console.log(sentence); // -> Malawi se ubica en Africa.

console.time()

console.log("probar consola"); // -> probar consola
console.timeEnd();

let river='4'
let character= river.charAt(0)
let str = "java script language";
console.log(str.slice(15,19));
const num = 42;

const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(1);
    

console.log(typeof strFromNum1);
console.log(typeof strFromNum2);
console.log(typeof strFromBool);
console.log(numFromStr);
console.log(boolFromNumber);
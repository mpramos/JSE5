//! TIPOS DE DATOS PRIMITIVOS
// cadena 
// numero
// booleano 
// indefinido
// nulo 
// simbolo

//!Números
// enteros(-3,-4,0,1,2,) y decimales(-3.5, 4.6,...)
//! Cadenas
// 'a'
// 'Asabeneh'
// "Asabeneh"
// 'Finland'
// 'JavaScript is a beautiful programming language'
// 'I love teaching'
// 'I hope you are enjoying the first day'
// `We can also create a string using a backtick`
// 'A string could be just as small as one character or as big as many pages'
// 'Any data type under a single quote, double quote or backtick is a string'
//! Booleanos
true // verdadero o falso
false // verdadero o falso
//!Indefinido
let primerNombre='maria'
console.log(primerNombre);
//!Nulo
let nombre=null;
console.log(nombre);

//!COMENTARIOS

//? comentarios en una sola linea
let edad=30 //Estamos definiendo la edad de la persona
//let edad=30 
// console.log(edad);


//? comentarios multilinea
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a Multiple line comment
  fdjfjfjfjf
  jfdjfjfjfjfj
*/


//!VARIABLES
//? Variables son contenedores para almacenar datos
//* Reglas

/*Un nombre de variable de JavaScript no debe comenzar con un número.
Un nombre de variable de JavaScript no permite caracteres especiales excepto el signo de dólar y el guión bajo.
Un nombre de variable JavaScript sigue una convención camelCase.
Un nombre de variable de JavaScript no debe tener espacios entre palabras.*/

//!Declaración de variables
/*firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
*/
//! Ejemplo de variables inválidas:
// first-name
// 1_num
// num_#_1
//! Ejemplos de variables declaradas

let firstName='Maria'
let age=31
let lastName='Gutierrez'
const gravedad= 9.81
console.log('Nombre : ' + firstName);
console.log('Apellido : ' + lastName);
console.log('Gravedad : ' + gravedad);
console.log('Nombre : ' + firstName ,'Apellido :' + lastName,gravedad, age=32)
console.log(1+2,2+4,3,4,5);
// console.log(lastName)
// console.log(gravedad)
let contador=0
for (let index = 0; index < 10; index++) {
    contador ++
    console.log(contador);
}
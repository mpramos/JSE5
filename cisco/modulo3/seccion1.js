console.log(2+'hola');
console.log(typeof 8);
console.log(false ? 'hola':'nada');
let year = 2050;
let newYear = year = 2051;
console.log(newYear);
console.log(2 + 2 * 2); // -> 6
console.log(2 + (2 * 2)); // -> 6
console.log((2 + 2) * 2); // -> 8

const x = 5;
const y = 2;

console.log("suma: ", x + y); // -> 7
console.log("resta: ", x - y); // -> 3
console.log("multiplicación: ", x * y); // -> 10
console.log("división: ", x / y); // -> 2.5
console.log("residuo de la división: ", x % y); // -> 1
console.log("potencia: ", x ** y); // -> 25
let n1=1
console.log(n1++);

console.log(n1);
n1 = n1 + 1;

let n1=1
console.log(++n1);
n1 = n1 + 1;
console.log(n1);


// ! "truthy" y "falsy".
//? Estos términos se refieren a cómo se evalúan 
//? los valores en un contexto booleano, es decir,
//? cuando se espera un valor verdadero (true) o
//? falso (false) en una expresión lógica.
//* Aquí están algunos ejemplos de valores "truthy"
//*  en JavaScript:

// Cualquier valor numérico distinto de cero
//  (ejemplo: 1, 42, -5.3, etc.).
// Cualquier cadena de texto no vacía (ejemplo: "hola", "verdadero", "false", etc.).
// El valor especial true.
// Objetos y arreglos, incluso si están vacíos (ejemplo: [], {}, etc.).
// Las funciones, incluso si están vacías (ejemplo: function() {}).

//* Por otro lado, aquí están algunos ejemplos de valores "falsy" en JavaScript:

// El valor numérico 0.
// La cadena de texto vacía "".
// El valor especial false.
// El valor especial null.
// El valor especial undefined.
// El valor especial NaN (Not-a-Number).

if (12) {
    console.log("Este mensaje se imprimirá, ya que 'hola' es truthy.");
  }
  if (false) {
    console.log("Este mensaje no se imprimirá, ya que 0 es falsy.");
  }
  
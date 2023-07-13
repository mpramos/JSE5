//!Operadores de Asignación
// (=)
let firstName='Maria'
let pais='Bolivia'
//!Operadores de asignacion complejas

//*Operador Ejemplos  Lo mismo que
// =        x=y         x=y
// +=       x+=y        x=x+y
// -=       x-=y        x=x-y
// *=       x*=y        x=x*y
// /=       x/=y        x=x/y
// %=       x%=y        x=x%y
// **=      x**=y       x=x**y


//! Operadores Aritmeticos
//? Suma (+) : a+b
//? Resta (-) : a-b
//? Multiplicacion (*) : a*b
//? División (/) : a/b
//? Módulo (%) : a%b
//? Exponencial (**) : a**b

let numeroA=4
let numeroB=5
let suma=numeroA + numeroB
let resta=numeroA - numeroB
let multiplicacion=numeroA * numeroB
let division=numeroA / numeroB
let modulo=numeroA % numeroB
let exponencial=numeroA ** numeroB
console.log(suma,resta,multiplicacion,division,modulo,exponencial);

//Ejercicio 1
const PI=3.14
let radio=100
// Formula para calcular el area de un circulo
const areaCirculo= PI*radio**2
console.log(areaCirculo)

//! Operadores de comparacion
//*Operador Nombre                             Ejemplo
// ==       Equivalencica el valor             x==y
// ===      Equivalencica el tipo y el valor   x===y
// !=       No igual                            x!=y
// >        Mayor que   x>y
// <                      x<y
// >=                     x>=y
// <=                     x<=y
//?EJEMPLOS
console.log('3>2 ',3>2);
console.log('3>=2 ',3>=2);
console.log(3<2);
console.log(2<3);
console.log(3==2);
console.log(3!=2);
console.log('3=="3"',3=='3');
console.log('3==="3"',3==='3');
console.log('3!=="3"',3!=='3');
console.log('0==false',0==false);
console.log('0===false',0===false);
console.log('word'.length == 'palabras'.length );

//! Operadores Lógicos
//* && (and)
//* || (or)
//* ! (not)
const check= 4>3 && 10>5
const check1= 4>3 && 10<5
console.log(check);
console.log(check1);
const check2= 4>3 || 10>5
const check3= 2>3 || 10<5
console.log(check2);
console.log(check3);
let check4=!(4<3)
console.log(check4);

//! OPERADOR DE INCREMENTO
// Pre incremento
let contador1=0
console.log(++contador1);
console.log(++contador1);
console.log(++contador1);
// Pre decremento
console.log(--contador1);
console.log(--contador1);


// Post incremento
let contador=0
// contador=contador+1 //1
// contador=contador+1 //2
// contador=contador+1 //3
// contador=contador+1 //4

console.log(contador++); //1
console.log(contador++); //2
console.log(contador++);
console.log(contador);
// Post decremento
console.log(contador--);
console.log(contador);

// if(2>6){
//     console.log('El numero 2 es mayor a cero');
// }else{
//     console.log('El numero 2 no es mayor a cero');
// }
//Operador ternario
let numero=-5
numero > 0 ? console.log('El numero es positivo'):console.log('El numero no es positivo');






//! Syntaxis de try y catch
let nombre
console.log(nombre);

try {
    let nombre='maria'
    let nombreCompleto=nombre + apellido

} catch (err) {
    console.log('Nombre del error ',err.name);
    console.log('Mensaje del error ',err.message);
} finally{
    console.log('finally 1');
    console.log('finally 1');
    console.log('finally 1');
}
 
//! throw 
const throwErrorFuncion=()=>{
    let mensaje
    let x=''
    try {
        if(x=='') throw 'vacio'
        if(isNaN(x)) throw 'no es un numero'
        x = Number(x)
        if (x<5) throw 'el numero es muy bajo'
        if (x>10) throw 'el numero ees muy alto'
    } catch (error) {
        console.log(error);
    }
}
throwErrorFuncion()

//! Tipos de errores
//? Error de referencia(ReferenceError) : referencia ilegal, se produce cuando no ha sido declarada nuestra variable
let firstName='Maria'
//Solucion es declarar la varibale: let lastName=''
let fullName= firstName + ' ' + lastName
console.log(fullName); 
//? Error de sintaxis(SyntaxError) un error de sintaxis
let cuadrado= 2x2
// let cuadrado= 2*2
console.log(`El valor del cuadrado es ${cuadrado}`); 
//? TypeError, Se produce por un error de tipo
let num=10
console.log(num.toLowerCase());
console.log('MARIA'.toLowerCase());





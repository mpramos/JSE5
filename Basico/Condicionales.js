if (condition) {

} else {

}
let numero = 3
if (numero > 0) {
    console.log('Hola soy un numero positivo');
}
let estaLloviendo = true
if (estaLloviendo) {
    console.log('Recuerda tomar el paraguas');
} else {
    console.log('No está lloviendo');
}
//! if else if
if (condition) {

} else if (condition) {

} else {

}

let a = -4
if (a > 0) {
    console.log('este numero es positivo ' + a);
} else if (a == 0) {
    console.log('este numero es cero ' + a);
} else {
    console.log('este numero es negativo ' + a);
}

let clima = 'despejado'
if (clima === 'soleado') {
    console.log('Tu necesitas llevar un bloqueador solar');
} else if (clima === 'nublado') {
    console.log('Tu necesitas llevar una chaqueta');

} else if (clima === 'lluvioso') {
    console.log('Tu necesitas llevar un paraguas');
} else {
    console.log('Clima no admitido')
}

//! Switch
switch (variable) {
    case 1:
        //codigo
        break
    case 2:
        //codigo
        break
    case 3:
        //codigo
        break
}
let clima2 = 'nublado'
switch (clima2) {
    case 'lluvioso':
        console.log('Tu necesitas llevar un paraguas');
        break;
    case 'soleado':
        console.log('Tu necesitas llevar un bloqueador solar');
        break;
    case 'nublado':
        console.log('Tu necesitas llevar una chaqueta');
        break;

    default:
        console.log('Clima no admitido')
        break;
}
//! Operador Ternarios
let estaLloviendoT=false
estaLloviendoT===true ? console.log('tu necesitas llevar un paraguas'):console.log('No necesitas llevar un paraguas');
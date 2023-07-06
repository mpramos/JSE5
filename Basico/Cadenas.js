let nombre='Maria'
let espacio= ' '
let pais='Bolivia'
let ciudad='La Paz'

//! Concatenacion de cadenas
let persona1= nombre+espacio+pais+espacio+ciudad
console.log(persona1);
let persona2= 'Persona 2: '+' '+nombre+' '+pais+' '+ciudad
console.log(persona2);
//! Bactiks
let persona3= `Persona 3: ${nombre} ${pais} ${ciudad}`
console.log(persona3);

let a=6
let b=3
console.log(`${a} es mas grande que  ${b}? : ${a>b}`)

//! Metodos de cadenas

//*1.-length : el metodo e longitud de cadena , devuelve el numero de caracteres ! en una cadenas , includio el espacio

let js='JavaScript'
console.log(js.length); //10
let nombre='Maria'//5-1 //4
console.log(nombre.length);

let string ='JavaScript'
let primerCaracter=string[0]
console.log(primerCaracter);
let segundoCaracter=string[1]
console.log(segundoCaracter);
let caracterS=string[4]
console.log(caracterS);
let caracterT=string[9]
console.log(caracterT);
let tamaño=string.length
console.log(tamaño);
let caracterTT=string[tamaño-1]
console.log(caracterTT);
let caracterTTT=string[string.length-1]
console.log(caracterTTT);

//! 3 toUpperCase() este metodo cambia la cadena a letras mayusculas
let string1 ='JavaScript'
console.log(string1.toUpperCase());
//! 4 toLowerCase() este metodo cambia la cadena a letras minusculas
let string2 ='JavaScript'
console.log(string2.toLowerCase());
//! 5 substring() este metodo toma dos argumentos . el indice inicial y el indice final, pero no incluye el caracter del indice final
let string3 ='JavaScript'
console.log(string3.substring(4,6));
//!  6 split() : este metodo split divide una cadena en un lugar especifico
let string4 ='Evolutech te capacita en JavaScript y React'

console.log(string4.split());
console.log(string4.split(' '));
console.log(string4.split(' ').toString());

let string5 ='JavaScript '
console.log(string5.split(''));
let string6 ='Evolutech te capacita, en JavaScript, y React'
console.log(string6.split(','));

//! 7 trim(): este metodo elminar el espacio al principio o al final de una cadena

let string7= '    Evolutech te capacita, en JavaScript, y React      '
console.log(string7);
console.log(string7.trim(' ')) ;
//! 8 incluye(): este metodo tomar un argumento de subcadena y verifica si es el argumnto de subcadena en la cadena.
//! Devuelve un valor booleando. Si existe una subcadena en una cadena devuelve el verdadero de lo contrario devuelve falso
let string8 ='Evolutech te capacita, en JavaScript, y React'
console.log(string8.includes('Evolutech')); //true
console.log(string8.includes('Evolutechhhhhh')); //false
//! 10 replace()tomar como parametor la subcadena anterior y una nueva subcadena
let string9 ='Evolutech te capacita, en JavaScript, y React'
console.log(string9.replace('JavaScript','Python'));
//! 11 charAt() toma el indice y devuelve el valor de ese indice
let string10 ='Evolutech te capacita, en JavaScript, y React'
console.log(string10.charAt(0));
//! 12 indexOf() tomar una subcadena y si la subcadena existe en una cedena devuelve la primerae posicion de la subcadena si no existe devuelve -1
let string11 ='Evolutech te capacita, en JavaScript, y React'
console.log(string11.indexOf('J'));
console.log(string11.indexOf('t'));
console.log(string11.indexOf('z'));

//! 12 lastindexOf() tomar una subcadena y si la subcadena existe en una cedena devuelve la ultima posicion de la subcadena si no existe devuelve -1
let string12 ='Evolutech te capacita, en JavaScript, y React'
console.log(string12.lastIndexOf('J'));
console.log(string12.lastIndexOf('t'));
console.log(string12.lastIndexOf('z'));
//! concat() : toma muchas subcadenas y los va a unir
let string13='evolutech' 
let string14='javascript'
console.log(string13.concat(' ',string14,' ','mensaje',' ','hola',' ','😀')); 
//! startsWith
let string15 ='Evolutech te capacita, en JavaScript, y React'
console.log(string15.startsWith('E'));
console.log(string15.startsWith('J'));
//! endsWith
let string16 ='Evolutech te capacita, en JavaScript, y React'
console.log(string16.endsWith('t'));
console.log(string16.endsWith('J'));






























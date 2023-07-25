
//! Callback

let multiplicacion = (a,b)=>{return a * b }
let division = (a,b)=>{return a /b }
console.log(suma(2,3));
console.log(resta(2,3));
console.log(multiplicacion(2,3));
console.log(division(2,3));

let suma = (a,b)=>{return a +b }
const calcularOperacion=(callback)=>{ return callback }
console.log(calcularOperacion(suma(2,3)));
let resta = (a,b)=>{return a - b }
const calcularOperacion1=(callback)=>{ return callback }
console.log(calcularOperacion1(()=> console.log(2)));

//! Programacion Funcional

//map
//filter
//reduce
// ForEach
const numeros=[1,2,3,4,5]

let acumulada=0
numeros.forEach(numero=>{
    console.log(`Multiplicacion ${numero} * 2 = ${numero*2} , Acumulada = ${acumulada +=numero}`);
})
let sum=0
numeros.forEach(numero=>{ 
    console.log(numero*2);
    sum=numero+sum
    return sum
})
console.log('La suma de todos los elementos , '+ sum);

// for (let i = 0; i < paises.length; i++) {
    //   console.log(paises[i].toUpperCase());
    
    // }
    // for (let i = 0; i < paises.length; i++) {
        //     console.log(paises[i].toLowerCase());
    
        // }
        const paises=['Colombia','Bolivia','Argentina','Peru','Chile']
        paises.forEach(pais=>console.log(pais.toUpperCase()))
        paises.forEach(pais=>console.log(pais.toLowerCase()))
        
        //! Map
        const paises1=['Colombia','Bolivia','Argentina','Peru','Chile']
        const paisesCopiaMayusculas=paises1.map(pais=> pais.toUpperCase())
        const paisesCopiaMinusculas=paises1.map(pais=> pais.toLowerCase())
        // COL,BOL,ARG,PER,CHI
        let paisesConTresLetras=paises1.map(pais=>pais.toUpperCase().slice(0,3).concat('🍔').concat('🍕'))
        console.log(paisesCopiaMayusculas);
        console.log(paisesCopiaMinusculas);
        console.log(paisesConTresLetras);
        console.log(paises1);
        //! FILTER
        const paises2=['Colombia','Bolivia','Argentina','Peru','Chile']
        const paisesTamaño4=paises2.filter(pais=>pais.length>4)
        const paisesContienenA=paises2.filter(pais=>pais.includes('a'))
        const paisesTerminenconIA=paises2.filter(pais=> pais.endsWith('ia'))
        console.log(paisesTamaño4);
        console.log(paisesContienenA);
        console.log(paisesTerminenconIA);
        
        const notas=[
            {nombre:'Jose', nota:95},
            {nombre:'Paola', nota:98},
            {nombre:'Josefa', nota:80},
            {nombre:'Martha', nota:50},
            {nombre:'Miguel', nota:85},
            {nombre:'Alejandra', nota:100},
        ]
        let alumnosAprobados= notas.filter(notaAlumno=>notaAlumno.nota > 80)
        console.log(alumnosAprobados);
        //! REDUCE
        const numerosReduce=[1,2,3,4,5]
        const sumReduce=numerosReduce.reduce((acumulada,numero)=>acumulada+numero,1)
        const multiplicacionReduce=numerosReduce.reduce((acumulada,numero)=>acumulada*numero,1)
        console.log(sumReduce);
        console.log(multiplicacionReduce);
        
        
        



        





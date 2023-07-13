let numeros=[1,2,3,4,5] //5  //0-4

// for (let i = 2; i <= numeros.length-1 ; i++) {     //i =5 ; 5< 5 ; i++ 5
//     const element = numeros[i]
//     console.log(element)
    
// }
// for (let i = 0; i < numeros.length ; i++) {     //i =5 ; 5< 5 ; i++ 5
//     const element = numeros[i]
//     console.log(element)
// }
// let suma=0
// for (let i = 0; i < numeros.length ; i++) {     //i =5 ; 5< 5 ; i++ 5
//     suma=numeros[i] + suma                     //suma=5+10 =>suma=15
// }
// console.log(suma);
//[1,4,9,16,25]
let newArreglo=[]
for (let i = 0; i < numeros.length ; i++) { 
    newArreglo.push(numeros[i]**2)
}
console.log(newArreglo);
console.log(numeros);

let paises=['Bolivia','Perú','Colombia']
let newArregloPaises=[]
for (let i = 0; i < paises.length; i++) {
    newArregloPaises.push(paises[i].toUpperCase())
}
console.log(newArregloPaises);
let paises=['Bolivia','Perú','Colombia']
let newArregloPaises=[]
for (let i = 0; i < paises.length; i++) {
    newArregloPaises.push(paises[i].toLowerCase())
}
console.log(newArregloPaises);

//! while => mientras
let i=0
while (i<=5) {
    console.log(i);
    i++
}
//! do while => hacer mientras
let j=0
do{
    console.log(j);
    j++
}while (j<=5) 

let k=6
do{
    console.log(k);
    k++
}while (k<=5) 

// for
let comidas=['🍕','🍔','🍟','🌭','🍿']
for (let comida of comidas) {
    console.log(comida);
}
for (let i = 0; i < comidas.length; i++) {
    const element = comidas[i];
    console.log(element);
}
const numerosS=[1,2,3,4,5]
let sum=0
for (const numero of numerosS) {
    sum=sum+numero
}
console.log(sum);
let nuevoArregloCudrados=[]
for (const numero of numerosS) {
    nuevoArregloCudrados.push(numero**2)
}
console.log(nuevoArregloCudrados);
const tecnologiasWeb=['HTML','JavaScript','CSS','Node']
const tecnologiasMayuscula=[]
for (const tecnologia of tecnologiasWeb) {
    tecnologiasMayuscula.push(tecnologia.toUpperCase())
}
console.log(tecnologiasMayuscula);

//! break
for (let i = 0; i <= 5; i++) {
    if (i===3) {
        break
    }    
    console.log(i);
}
//!continue
for (let i = 0; i <= 5; i++) {
    if (i===3) {
        console.log('yo soy tres ');
        continue
    }    
    console.log(i);
}




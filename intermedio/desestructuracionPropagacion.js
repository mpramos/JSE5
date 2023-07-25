

let numeroUno= numeros[0]
let numeroDos= numeros[1]
let numeroTres= numeros[2]
let numeroCuatro= numeros[3]
let numeroCinco= numeros[4]
console.log(numeroUno);
console.log(numeroDos);
console.log(numeroTres);

console.log(numero1);
console.log(numero2);
console.log(numero3);
const numeros=[1,2,3,4,5,6,7,8,9,10]

let [numero1,numero2,numero3,...rest]=numeros
console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(rest);
console.log(numero10);
console.log(numero3);
let suma = numero1+numero3
console.log(suma);
console.log(numero2);

let numeroA=numeros[0] //1
let numeroC=numeros[2] // 3

const nombres=['Pablo','Maria','Agustina']

let [primerNombre,segundoNombre,tercerNombre] = nombres
console.log(tercerNombre);
console.log(primerNombre,segundoNombre,tercerNombre);

const fullstack=[['HTML','CSS','JS','React'],['Node','Express','MongoDB']]
console.log(fullstack);
let [frontend,backend]=fullstack
console.log(frontend);
console.log(backend);



//! Desestructuracion durante la iteracion

const paises=[['Argentina','Buenos Aires'],['Bolivia','Sucre'],['Colombia','Bogotá']]

for (let i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}
for (const [pais,ciudad] of paises) {
    console.log(pais,ciudad);
    console.log(ciudad);
}
const fullstack1=[['HTML','CSS','JS','React'],['Node','Express','MongoDB']]

for (const [skill1,skill2,skill3,skill4] of fullstack1) {
    console.log(skill1);    
    console.log(skill2);    
    console.log(skill3);    
    console.log(skill4);    
}

//! Objeto de desestructuracion

const rectangulo={
    ancho:5,
    alto:7,
    area:200
}
const{ancho:an,alto:al,area:ar,perimetro:p=60}=rectangulo
console.log(an);
console.log(al);
console.log(ar);
console.log(p);


//! 
const calcularPerimetro=(rectangulo)=>{
    return 2 * (rectangulo.ancho + rectangulo.alto)
}
console.log(calcularPerimetro(rectangulo1));

const rectangulo1={
    ancho:5,
    alto:7
}
const calcularPerimetro1=({ancho,alto})=>{
    return 2 * (ancho +alto)
}
console.log(calcularPerimetro1(rectangulo1));


//! Objeto de desestructuracion durante la iteracion

const todoList=[
    {
        task:'Estudiar modulo1',
        time:'4/8/2023',
        completed: false
    },
    {
        task:'Estudiar modulo2',
        time:'4/7/2023',
        completed: true
    },
    {
        task:'Estudiar modulo3',
        time:'8/8/2023',
        completed: false
    },
    
]
console.log(todoList);


for (const {task,time,completed} of todoList) {
    console.log(task);
    console.log(time);
    console.log(completed);
}
// --------------------------------->
//! Operador de Propagacion

const numerosPares=pares
console.log(numerosPares);
numerosPares.push(12)
console.log(pares);

const pares=[0,2,4,6,8, 10]
let paresA= pares
console.log(paresA);
paresA.push(12)
console.log(paresA);
console.log(pares);

const numerosParesProp=[...pares]
numerosParesProp.push(12)
numerosParesProp.push(14)
console.log(numerosParesProp);
console.log(pares);

let frontend1=['HTML','CSS','JS','React']
let backend1 =['Node','Express','MongoDB']

let fullstack123 =[...frontend1,...backend1]
console.log(fullstack123);
console.log(frontend1);
console.log(backend1);


//? Operdaor de extension para copiar objeto

const newUser=user
console.log(newUser);
newUser.email='123@gmail.com'
console.log('Usuario:',user,'Nuevo usuario:',newUser );

const user={
    name:"John",
    age:35,
    country:'Bolivia',
    city:'Santa Cruz'
}
const newUserProp={... user}
console.log(newUserProp);
newUserProp.email='123@gmail.com'
console.log('Usuario:',user,'Nuevo usuario:',newUserProp );

// Operador de propagacion con funcion de flecha

const sumaTodosLosNumeros=(...args)=>{
    // console.log(args);
    let suma=0
    for (const numero of args) {
        suma = suma+ numero
    }
    return(suma);

}
console.log(sumaTodosLosNumeros(1,2,3,4))
sumaTodosLosNumeros(1,2,3,4,5,6,7,7,8,3,8,8,8,8,8,8,8,8,8,8,8,8)
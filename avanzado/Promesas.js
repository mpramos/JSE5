//! Constructor de promesas

//? Syntaxis de promesa
let miPrimeraPromesa=new Promise((resolve, reject)=>{
        resolve('satisfactorio')
        reject('fallida')
})


let miSegundaPromesa= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let habilidades=['HTML','CSS','JAVASCRIPT']
            
            if (habilidades.includes('CSS')) {
                resolve(habilidades)
            } else {
                reject('Ocurrió un error ...')
            }
        },2000)
})

miSegundaPromesa
.then(result=>{console.log(result)})
.catch(error=>console.log(error))

const url ='https://restcountries.com/v2/all'
fetch(url)
.then(response => response.json()) //transformar la respuesta a json
.then(data=>{
    console.log(data);
})
.catch(error=>console.log(error))


//! Funciones async y await

const url2 ='https://rickandmortyapi.com/api/character'


const fetchData= async ()=>{
    try{
        const respuesta= await fetch(url2)
        const data =await respuesta.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchData()
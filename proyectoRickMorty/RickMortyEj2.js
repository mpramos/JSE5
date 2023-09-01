

const API='https://rickandmortyapi.com/api/character'
let fetchData= async ()=>{
    let respuesta = await fetch(API)
    let data = await respuesta.json()
    console.log(data.results);
}
fetchData()

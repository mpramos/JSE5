
fetch('https://rickandmortyapi.com/api/character')
.then(respuesta=>respuesta.json())
.then(data=>console.log(data.results))
.catch(error=> console.log(error))



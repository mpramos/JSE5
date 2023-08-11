
//! JSON.parse(json)

const usuariosTexto=
`{
    "usuarios": [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "email":"rickMorty@gmail.com",
        "phone": 7777778
       
    },
    {
        "id": 2,
        "name": "Abradolf Lincler ",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "email":"rickMorty@gmail.com",
        "phone": 7777778
       
    },
    {
        "id": 3,
        "name": "Morty",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "email":"rickMorty@gmail.com",
        "phone": 7777778
    }
    ]
}`

const userObject=JSON.parse(usuariosTexto,(key,value)=>{
    let newValue= typeof value == 'string' && key !='email' ? value.toUpperCase(): value
    return newValue
})
console.log(userObject);


// const usuarioObjeto =JSON.parse(usuariosTexto);
// console.log(usuarioObjeto);
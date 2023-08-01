
class Persona {
     constructor(nombre='Maria',edad=60,email='123@gmail.com',telefono='2323232'){
        this.nombre=nombre,
        this.edad=edad,
        this.email = email;
        this.telefono=telefono;
        this.score=0
        this.habilidades=[]
     }
     obtNombreEdad(){
      let obtnNombrEdad= this.nombre + ' ' + this.edad
      return obtnNombrEdad
     }
     get obtenerScore(){
      return this.score
     }
     get obtenerHabilidades(){
      return this.habilidades
     }
     set cambiarScore(score){
      // this.score = this.score + score
      this.score += score
     }
     set cambiarHabilidades(habilidad){
       this.habilidades.push(habilidad)
     }

}
//! Herencia
class Estudiante extends Persona {
   Saludar(){
      console.log('Hola soy estudiante y estoy heredando propiedades y metodos de mi padre Persona');
   }
}
const e1= new Estudiante()
console.log(e1.obtNombreEdad());
e1.Saludar()
const persona1= new Persona('Susana',38,'123@gmail.com','2222')
const persona2= new Persona('Jose',48,'234@gmail.com','231312312')
const persona3= new Persona()
const persona4= new Persona()

console.log(persona1.obtNombreEdad());

persona1.cambiarScore=1
console.log(persona1.obtenerHabilidades);
persona1.cambiarHabilidades='HTML'
console.log(persona1.obtenerHabilidades);
persona1.cambiarHabilidades='CSS'
console.log(persona1.obtenerHabilidades);
persona1.cambiarHabilidades='JavaScript'
console.log(persona1.obtenerHabilidades);
console.log(persona1.obtenerScore);
persona1.cambiarScore=1
console.log(persona1.obtenerScore);
// console.log(persona2.score);
console.log(persona2.obtenerScore);
persona2.cambiarScore=5
console.log(persona2.obtenerScore);
persona2.cambiarScore=7
console.log(persona2.obtenerScore);

// console.log(persona2.habilidades);
console.log(persona2.obtenerHabilidades);

console.log(persona3);
console.log(persona4);

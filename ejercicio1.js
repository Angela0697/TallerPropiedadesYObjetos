/*
Libro (Objeto básico + if)
Crear un sistema de préstamo de libros.
Tareas:
1.Usa el constructor Libro para crear un objeto con título y autor.
2.Agrega una propiedad prestado = false.
3.Implementa el método prestar() que:
•Cambie prestado a true si el libro está disponible.
•Muestre un mensaje de error si ya está prestado (usando if).
4.Prueba prestar el libro dos veces y observa los mensajes.
*/

function libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.prestar = function () {
        if (this.prestado === false){
          this.prestado == true
          console.log(this.titulo + " de " + this.autor + " " + "Ha sido prestado");
        }
        else {
            console.log(this.titulo + " de " + this.autor + " " + " Ya esta prestado");
        }
    }
}

const miLibro = new libro ("Orgullo y Prejuicio", "Jane Austen");
console.log(miLibro.prestar());

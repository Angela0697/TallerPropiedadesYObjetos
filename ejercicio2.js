/*
Lista de Compras (Array + for)
Gestionar una lista dinámica de productos.
Tareas:
1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
2.Añade 3 productos con el método agregar().
3.Implementa el método mostrar() que use un for para listar los productos numerados (ej: "1.
Manzanas").
4.Muestra la lista completa en consola.
*/
function listaCompras() {
    this.productos = [];
    this.agregar = function (producto) {
        this.productos.push(producto)        
    }
    this.mostrarLista = function () {
        for (let i = 0; i < this.productos.length; i++){
            console.log(this.productos[i]);
            
        }
        
    }
}

const lista = new listaCompras()
lista.agregar("tomate")
lista.agregar("arroz")
lista.agregar("banano")

lista.mostrarLista()
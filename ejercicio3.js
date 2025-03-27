/*
 Semáforo (If/else + estados)
Simular el cambio de luces de un semáforo.
Tareas:
1.Usa el constructor Semaforo (inicia en "rojo").
2.Implementa el método cambiar() que rote entre "rojo" → "verde" → "amarillo" →
"rojo" usando if/else.
3.Llama al método 3 veces y verifica que el ciclo funcione.
*/

function semaforo(){
    this.estado = "rojo"
    this.cambiarSemaforo = function () {
        if (this.estado == "rojo"){
            this.estado = "verde"
        }
        else if (this.estado == "verde"){
            this.estado = "amarillo"
        }
        else if (this.estado == "amarillo"){
            this.estado = "rojo"
        }
        console.log(this.estado);
    }
}
const cambioSemaforo = new semaforo()
cambioSemaforo.cambiarSemaforo()
cambioSemaforo.cambiarSemaforo()
cambioSemaforo.cambiarSemaforo()
cambioSemaforo.cambiarSemaforo()

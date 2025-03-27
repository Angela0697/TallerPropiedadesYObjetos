/*
4. Termómetro (Variables + condiciones)
Alertar sobre temperaturas extremas.
Tareas:
1.Usa el constructor Termómetro.
2.Implementa el método actualizar(grados) que muestre:
•"¡Hace calor!" si > 30°C.
•"¡Hace frío! " si < 10°C.
•"Temperatura agradable" en otros casos.
3.Prueba con temperaturas de 5°, 20° y 35°.
*/

function termometro() {
    this.actualizar = function (grados) {
        if (grados > 30) {
            console.log("¡Hace calor!");   
        }
        else if (grados < 10){
            console.log("¡Hace frío!");            
        }
        else{
            console.log("Temperatura agradable");
        }
    }

}
const termo1 = new termometro()
termo1.actualizar(5)
termo1.actualizar(20)
termo1.actualizar(35)

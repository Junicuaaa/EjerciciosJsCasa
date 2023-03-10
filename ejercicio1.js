/* Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" */


const nota1 = 2.9, nota2 = 3.9, nota3 = 4.7;

function programaDatos(){
    const rango = 3.9
    const promedio = (nota1 + nota2 + nota3)/3
    if (promedio <= rango) {
        console.log("Estudie, vago...")
    } else {
        console.log("Pilopaga mi rey")
    }
}

programaDatos()


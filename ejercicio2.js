/* Dado un número indicar si es par o impar y si es mayor de 10. */

function mayorMenor(){
    let numero = prompt("ingrese un numero");
    if (numero % 2 == 0) {
        if (numero > 10) {
            console.log("El numero es par y mayor que 10")
        }
        else if (numero < 10) {
            console.log("el numero es par y menor que 10")
        }
    }
    else if(numero > 10){
        console.log("El numero es impar y mayor que 10")
    }else{
        console.log("El numero es impar y menor que 10")
    }
}

mayorMenor()
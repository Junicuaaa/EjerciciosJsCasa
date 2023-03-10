// Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.
let detectar = () =>{
    num1 = parseInt(prompt("Ingresa el primer numero"))
    num2 = parseInt(prompt("Ingresa el segundo numero"))
    if (num1 > num2) {
        console.log(`Su suma es ${num1 + num2} y su diferencia es ${(num2 - num1) * -1}`);
    }else{
        console.log(`Su producto es ${num1*num2} y su division es ${num1/num2}`);
    }
}
detectar()
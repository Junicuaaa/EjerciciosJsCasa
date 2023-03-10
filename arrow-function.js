const nombres = new Array;
const edades = new Array;

let datos = ()=> {
    do {
        nombres.push(prompt("Ingresa un nombre"))
        edades.push(parseInt(prompt("Ingresa la edad de esa persona")))
    } while (confirm("Desea agregar otro nombre?"))
}
const identificarMayor = ()=> {
    let mayor = Math.max(...edades)
    let ubicacion = edades.indexOf(mayor)
    console.log(`La persona con mayor edad es ${nombres[ubicacion]} con ${mayor} años`)
}
datos();
identificarMayor();
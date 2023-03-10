// Construir el algoritmo en Javascript para un programa
// para cualquier cantidad de estudiantes que lea el nombre,
// el sexo y la nota definitiva y halle al estudiante con la mayor
// nota y al estudiante con la menor nota y cuantos eran
// hombres y cuantos mujeres.
const nombres = new Array;
const sexoM = new Array;
const notaDefinitiva = new Array;
const sexoF = new Array;

let peticion = () => {
    do {
        nombres.push(prompt("Ingresa un estudiante"))
        let sexoDeficion = prompt("Ingrese el sexo (femenino)(masculino)")
        sexoDeficion.toLocaleLowerCase()
        notaDefinitiva.push(parseFloat(prompt("ingrese su nota Definitiva")))
        if(sexoDeficion === "femenino"){
            sexoF.push(sexoDeficion)
        }else{
            sexoM.push(sexoDeficion)
        }
    } while (confirm("Desea seguir agregando estudiantes?"));

}
let notaMayorMenor = () =>{
    let notaMayor = Math.max(...notaDefinitiva)
    let notaMenor = Math.min(...notaDefinitiva)
    console.log(`la nota mayor es ${notaMayor} y la nota menor es ${notaMenor}`)
}
peticion();
notaMayorMenor();
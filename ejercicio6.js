// Construir el algoritmo en Javascript para un programa
// para cualquier cantidad de estudiantes que lea el nombre,
// el sexo y la nota definitiva y halle al estudiante con la mayor
// nota y al estudiante con la menor nota y cuantos eran
// hombres y cuantos mujeres.
const nombres = new Array,sexoM = new Array,notaDefinitiva = new Array,sexoF = new Array;
let peticion = () => {
    do {
        nombres.push(prompt("Ingresa un estudiante"))
        let sexoDeficion = prompt("Ingrese el sexo (femenino)(masculino)");
        sexoDeficion.toLocaleLowerCase();
        notaDefinitiva.push(parseFloat(prompt("ingrese su nota Definitiva")));
        if(sexoDeficion === "femenino"){
            sexoF.push(sexoDeficion)
        }else{
            sexoM.push(sexoDeficion)
        }
    } while (confirm("Desea seguir agregando estudiantes?"));
    notaMayorMenor();
}
let notaMayorMenor = () =>{
    let notaMayor = Math.max(...notaDefinitiva), notaMenor = Math.min(...notaDefinitiva),hombres = sexoM.length, mujeres = sexoF.length;
    let ubicacion1 = notaDefinitiva.indexOf(notaMayor),ubicacion2 = notaDefinitiva.indexOf(notaMenor);
    console.log(`
    La cantidad de hombres es ${hombres} y de mujeres es ${mujeres}.\n 
    El estudiante con la mayor nota es ${nombres[ubicacion1]}, con una nota de: ${notaMayor}.\n
    El estudiante con la menor nota es ${nombres[ubicacion2]}, con una nota de: ${notaMenor}.`
    );
}
peticion();

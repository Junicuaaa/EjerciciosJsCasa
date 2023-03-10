/* Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */

let compraFactura = () =>{
    let producto = prompt("Ingrese el nombre del producto");
    let precio = Number(prompt("Ingrese el precio"));
    let cantidad = Number(prompt("Ingrese la cantidad"));
    producto.toUpperCase();
    let espacios = (valor) =>{
        valor = 12 - valor.lenght;
        return valor
    }
    let total = (precio*cantidad);
    console.log(
        `PRODUCTO${" ".repeat(espacios(producto))}|${producto}\nPRECIO ${" ".repeat(espacios(precio))}|${precio}\nCANTIDAD${" ".repeat(espacios(cantidad))}|${cantidad}\nTOTAL ${" ".repeat(espacios)}|${total}`
    );
}
compraFactura();

let cantidad = parseInt(prompt('Escriba la cantidad de '));
let precio = parseInt(prompt('Escriba el precio del producto'));
let total = (cantidad*precio);
let descuento = total*0.20;
let totdes = (total - descuento);


if (total > 20000){
    console.log('')
}
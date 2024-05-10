let articulos =parseInt(prompt('Cuantos artículos desea comprar?'))
let precio = parseInt(prompt('Cuál es el valor de los productos?'))
let total = articulos*precio;
let descuento = total*0.15;

switch(true){
    case total>=20000 && articulos>=10:
        console.log('Se le descontará  $',(descuento), ' de su total a pagar, que será de:  $',(total-descuento))
        break;

        default:
            console.log('Usted no aplica para el descuento, su total es: $',(total))
            break;
}
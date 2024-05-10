let tr1 = parseInt(prompt('Ingrese nota del primer trimestre'))
let tr2 = parseInt(prompt('Ingrese nota del primer trimestre'))
let tr3 = parseInt(prompt('Ingrese nota del primer trimestre'))
let prom = ((tr1 + tr2 + tr3)/3)
if((isNaN (tr1)) || (isNaN(tr2)) || (isNaN(tr3))){
    console.log('alguno de los numeros ingresados no es valido');
} else 
    switch(prom){
        case (1) || (2) || (3):
        console.log('Tu nota es una poronga')
        break;
        case (4) || (5):
            console.log('Tu nota es Regular')
        break;
        case (6) || (7):
            console.log('Tu nota es Buena')
        break;
        case (8) || (9):
            console.log('Tu nota es Muy Buena')
        break;
        case 10:
            console.log('Tu nota es Sobresaliente')
        break;
        default:
            console.log('Tu nota no tiene sentido :(')
        break;
    }

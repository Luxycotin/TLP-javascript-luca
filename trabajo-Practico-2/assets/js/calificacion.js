let tr1 = parseInt(prompt('Ingrese nota del primer trimestre'))
let tr2 = parseInt(prompt('Ingrese nota del segundo trimestre'))
let tr3 = parseInt(prompt('Ingrese nota del tercer trimestre'))
let prom = ((tr1 + tr2 + tr3)/3)
if((isNaN (tr1)) || (isNaN(tr2)) || (isNaN(tr3))){
    console.log('alguno de los numeros ingresados no es valido');
} else 
    switch(true){
        case prom < 4 && prom >= 1:
        console.log('Tu nota es Insuficiente')
        break;
        case prom >= 4 && prom < 6:
            console.log('Tu nota es Regular')
        break;
        case prom >= 6 && prom < 8:
            console.log('Tu nota es Buena')
        break;
        case prom >= 8 && prom <10:
            console.log('Tu nota es Muy Buena')
        break;
        case prom = 10:
            console.log('Tu nota es Sobresaliente')
        break;
        default:
            console.log('Tu nota no tiene sentido :(')
        break;
    }

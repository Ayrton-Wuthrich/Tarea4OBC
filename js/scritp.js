let numeroIf = parseInt(prompt("Introduce un numero:"));

if(numeroIf > 0){
    console.log("El numero es positivo");
} else if(numeroIf < 0){
    console.log("El numero es negativo");
}else {
    console.log("El numero es igual a cero")
}

let numeroWhile = 0;

while(numeroWhile < 3){
    numeroWhile++;
    console.log(numeroWhile)
}

let numeroDoWhile = 0;

do{
    numeroDoWhile++;
    console.log(numeroDoWhile)
}while(numeroDoWhile < 3)


for(let numeroFor = 0; numeroFor <= 3; numeroFor++){
    console.log(numeroFor)
}


let estacion = "otoño"

switch(estacion){
    case "invierno":
        console.log("Estamos en invierno");
        break;
    case "primavera":
        console.log("Estamos en primavera");
        break;
    case "verano":
        console.log("Estamos en verano");
        break;
    case "otoño":
        console.log("Estamos en otoño");
        break;
    default:
        console.log("El valor de la variable estacion no corresponde a una estacion")
        break;
}
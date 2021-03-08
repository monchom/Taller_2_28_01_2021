
//SWITCH
let edad = prompt('digite la edad de la persona');

switch(calcular()){
    case '17':
        console.log(`La persona es menor de edad.`);
        break;
    case '18':
        console.log(`La persona es mayor de edad.`);
        break;
    default:
        console.log(`ha ingresado una edad incorrecta`);
        break;
}

function calcular(){
    if(edad>=1 && edad<=17){
        return '17';
    }else if(edad >= 18 && edad <= 115){
        return '18';
    }else {
        return '0';
    }
}
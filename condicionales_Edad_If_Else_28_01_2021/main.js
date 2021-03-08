let edad = prompt('digite la edad de la persona');

if(edad<=0){
    console.log(`La edad debe ser mayor a 0.`);
}else if(edad<=17){
    console.log(`La persona es menor de edad.`)
}else if(edad>=18 && edad<=115){
    console.log(`La persona es mayor de edad.`)
}else{
    console.log(`ha ingresado una edad incorrecta`);
}
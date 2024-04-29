/* Escribe un programa JavaScript que genere un número aleatorio entre 1 y 10 y le pida al usuario que lo adivine. El programa debe dar pistas al usuario si su suposición es demasiado alta o demasiado baja hasta que logre adivinar el número correcto */

let numero_random = parseInt(Math.random() * 10)+1;

let numero;

while ( numero_random != numero ) {
num = prompt("Digite el numero");
if ( numero_random == numero ) {
    console.log("CORRECTO");
}else{
    console.log("incorrecto");
}
}
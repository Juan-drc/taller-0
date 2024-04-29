/* Escribe un programa que calcule el factorial de un número. */

let num = parseInt(prompt("Digite el numero"));
let resultado = 1;
for (let i = 1 ; i <= num; i++ ) {
    resultado = resultado*i;
}

alert(`El factorial de ${num} es ${resultado}`);
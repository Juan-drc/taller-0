/* Escribe un programa que genere la tabla de multiplicar de un número dado. */
let numero = parseInt(prompt("Digite el numero el cual desee conocer su tabla de multiplicar"));
for (let i = 0; i<=10 ; i++){
    resultado = numero * i;
    console.log(numero+"X"+i+"="+resultado);
}

/* Escribe un programa que tome dos números como variables y muestre cuál es el mayor de los dos. */

let num1 = parseInt(prompt("Digite el primer numero a comparar")) ;
let num2 = parseInt(prompt("Digite el segundo numero a comparar")) ;

if (num1 < num2) {
    alert(num2+" es mayor que "+num1);
}
else if (num2 < num1) {
    alert(num1+" es mayor que "+num2);
}
else{
    alert(num1+" y "+num2 + " son iguales.");
}
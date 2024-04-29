/* Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.
*/

let menu = parseInt(prompt(" digite la opcion 1:suma 2:resta 3:multiplicacion 4:divison"));
let numero1 = parseInt(prompt("DIgite el primer numero"));
let numero2 = parseInt(prompt("DIgite el segundo numero"));
if (menu == 1 ) {
    alert("La suma es: "+(numero1+numero2));
}
else if (menu == 2){
    alert ("La resta es:" + (numero1-numero2));
}
else if (menu == 3){
    alert ("La multiplicacion es:" + (numero1*numero2));
}
else if (menu == 4){
    alert ("La Division es:" + (numero1/numero2));
}
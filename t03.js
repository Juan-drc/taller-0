/* Escribe una función que tome un string como entrada y devuelva la misma cadena con las letras en orden inverso (sin usar funciones de JavaScript). */

function in_cadena (cadena){
    let cadena1 = "";
    for ( let i = cadena.length - 1;i>=0; i-- ) {

        cadena1 += cadena.charAt[i];


    }
    return cadena1;
}




let cadenaP = "Hola";
let cadena1 = in_cadena (cadenaP);
console.log(cadena1); 
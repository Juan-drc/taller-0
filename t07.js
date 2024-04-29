/* Escribe un programa que tome un string como entrada y cuente el número de vocales que contiene. */

function contar_vocales (texto){
    return texto.replace(/[^aeiouAEIOU]/g,"").length
    }
    
    console.log(contar_vocales("Hola"));
    
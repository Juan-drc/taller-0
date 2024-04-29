/* Escribe un programa que genere una lista aleatoria de numeros y elimine todos los pares. */
let lista = [ ] ;
let impares = [ ];
for (let i = 0; i < 5 ; i++) {
    lista.push(parseInt(Math.random() * 100));
    if ( lista[i] %  2 == 1 ) {
        impares.push( lista[ i ] );
    }
}
console.log(lista);
console.log(`Impares ${impares}`);







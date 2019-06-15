/* Uma vari�vel que armazena um objeto �, na verdade,
 um endere�o que aponta para o objeto. Diferente de tipos primitivos */

//Testando com Objetos
var a = {valor: 10}, b;

/* O 'b' recebe o endere�o de 'a', ou seja, 'b' se torna o 'a' propriamente dito */
b = a;
b.valor++;

console.log(a, b);

//Testando com tipos primitivos
var a = 10, b;

b = a;
b++;

console.log(a, b);
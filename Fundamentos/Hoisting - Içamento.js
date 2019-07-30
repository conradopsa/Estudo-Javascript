/*Hoisting (i�amento) � a propriedade de jogar
 a declara��o da vari�vel para o topo do bloco*/

/*Em javascript o var possui essa propriedade,
 enquanto que o let n�o*/

//Com hoisting (Funciona!)
console.log(a);
var a = 10;
console.log(a);

/* A declara��o � jogada para cima, 
mas n�o a atribui��o do valor 10. 
Por isso undefined */

//Sem hoisting (Erro!)
console.log(b);
let b = 10;
console.log(b);
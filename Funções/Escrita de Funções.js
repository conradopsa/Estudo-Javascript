// Fun��o em JS � uma First-Class Object (Citizens),
// Higher-order Function
// Ou seja, a fun��o pode ser tratada como um dado

// Fun��o de forma literal
function fun1() { }

// Fun��o em uma vari�vel
let fun2 = function() { return "pao de batata"}

// Fun��o em um Array
let arr = [function () { }, function () { }, fun1, fun2];

// Armazenar em um atributo de objeto
let obj = {
    falar: function() { return "Eai galiera" }
}
obj.reclamar = function() { return "QUERO CAF�EE!" }

console.log(obj.falar());
console.log(obj.reclamar());

// Fun��o como par�metro
function fun3(fun){
    fun();
}
fun3(function(){ console.log("Oloco, funciona mesmo!") });
//fun3(fun2); n�o funfa :(

// Fun��o como retorno
function fun4(texto){
    return function(texto2) { console.log(texto, texto2); };
}
fun4("Rom�ro britu")("vem tranquilo");

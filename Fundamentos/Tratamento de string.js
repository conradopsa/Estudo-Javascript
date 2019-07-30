const dev = "Developer!";

/*Imprimindo um char de uma string
  a partir de uma posi��o*/
{
    console.log(dev.charAt(0));
    console.log(dev.charAt(1));
    console.log(dev.charAt(2));
    console.log(dev.charAt(3));
    console.log(dev.charAt(4));
    console.log(dev.charAt(5));
    console.log(dev.charAt(6));
    console.log(dev.charAt(7));
    console.log(dev.charAt(8));
    console.log(dev.charAt(9));

    /* 
    Ou

    for (var i = 0; i<dev.length; i++){
        console.log(dev.charAt(i));
    }
    */
}

//Indice de um char em uma string
console.log(dev.indexOf('e'));

//C�digo Ascii de um Char
console.log(('D').charCodeAt(0));

//Substring
console.log(dev.substring(0, 3));
console.log(dev.substring(4));

//Concatena��o
console.log('t'.concat('e').concat('s').concat('t').concat('e'));
console.log('t'+'e'+'s'+'t'+'e');

//Substitui��o
console.log(dev.replace("e", "3"));
console.log(dev.replace(/\e/g, "3")); //Express�o regular

//String para vetor (array)
var arr = "1,2,3,4,5".split(',');
console.log(arr[0]);
//String para int
console.log(Number("15"));

//Int para String
console.log((10).toString());

//Int para boolean
console.log(Boolean(1));
//ou
console.log(!!1);

//String para boolean
console.log(Boolean(Number("1")));

//Limitando casas decimais
console.log((10.58599999999999999).toFixed(2));

//Checa se um n�mero � inteiro
console.log(Number.isInteger((10.5)));

//Conver��es de bases:
{
    //Para bin�rio
    console.log((15).toString(2));
    
    //Para octal
    console.log((15).toString(8));

    //Para hexadecimal
    console.log((15).toString(16));

    //Outras bases � s� mudar o toString(n)    
}

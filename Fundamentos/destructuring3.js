//Destructuring de objeto em par�metros

/*O par�metro pega uma c�pia das
 vari�veis de nome min e max de um objeto*/
function rand({ min, max }){
    //troca se min > max
    if (min>max){
        let aux = min;
        min = max;        
        max = aux;
    }

    let val = Math.random() * (max-min) + min;
    return val.toFixed();
}

console.log(rand({ min: 25, max: 20 }))
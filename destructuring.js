let pessoa = {
    nome: 'Dio',
    idade: 67,
    endereco: {
        rua: 'Holy Diver',
        numero: 1
    }
}

/*Destructuring: cria uma vari�vel vis�vel no
escopo atual a partir do atributo de um objeto*/
let { nome } = pessoa;
console.log(nome);

//Alterando a vari�vel
nome = 'Ozzy'
console.log(nome, pessoa.nome);

//Erro
//console.log(idade);

let { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);

//Erro
//console.log(endereco);

//Outra forma, com novo identificador
let { nome: A } = pessoa;
console.log(A);


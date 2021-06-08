//desafio 1 - criar 3 variaveis: nome idade eMaiorDeIdade
//no JS a convençao é usar é aspas simples

let nome = 'Gabriela';
let idade = 34;
let eMaiorDeIdade = true;


//desafio 2 - criar variavel tipo objeto que irá conter 3 propriedades, nome idade e maior de idade

let pessoaA = {
    nome : nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade 
}

//console.log(pessoaA)
//console.log(pessoaA.nome)
//console.log(pessoaA.idade)

let pessoaB = {
    nome,
    idade,
    eMaiorDeIdade 
}

//desafio 3 criar array e passar 4 animais

let animais = ['vaca' , 'cavalo' , 'cachorro', 'gato'];

// OPERADORES aritiméticos


//criar variavel resultadosSoma 
// resultados

let numero1 = 10
let numero2 = 5

// + - * /

let resultadosSoma = numero1 + numero2
let resultadosMultiplicacao = numero1 * numero2
let resultadosSubtracao = numero1 - numero2
let resultadosDivisao = numero1 / numero2

//console.log(resultadosSoma);
//console.log(resultadosMultiplicacao);
//console.log(resultadosSubtracao);
//console.log(resultadosDivisao);

//desafio 4



if (numero2 > numero1){
    console.log('O ' + numero2 + ' é maior que ' + numero1 );
}else if(numero1 > numero2){
    console.log('O ' + numero1 + ' é maior que ' + numero2 );
}else{
    console.log('O ' + numero1 + ' é igual que ' + numero2 );
}


//desafio 5

function comparacao(numero1, numero2){
    if (numero2 > numero1){
        console.log('O ' + numero2 + ' é maior que ' + numero1 );
    }else if(numero1 > numero2){
        console.log('O ' + numero1 + ' é maior que ' + numero2 );
    }else{
        console.log('O ' + numero1 + ' é igual a ' + numero2 );
    }
}

comparacao(numero1, numero2)


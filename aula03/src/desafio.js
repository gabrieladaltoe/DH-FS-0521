/*
Desafio: obter a quantidade de dias que temos de diferença entre as datas 15/05/2020 e 15/05/2021 utilizando o moment e o date
*/ 

const moment = require('moment');
const {differenceInDays} = require('date-fns');
// passo 1
//criar variavel das datas inicial e final formatado com moment

// passo 2

let dataInicial = moment('2020-05-15');
let dataFinal = moment('2021-05-15');
var diasDeDiferenca = dataFinal.diff(dataInicial, 'months');
var mesesDeDiferenca = dataFinal.diff(dataInicial, 'months');

console.log( 'A diferença de dias entre as datas 15/05/2020 e 15/05/2021 é ' + diasDeDiferenca);
console.log('A diferença de meses entre as datas 15/05/2020 e 15/05/2021 é ' + mesesDeDiferenca);

//console.log(dataFinal.from(dataInicial)); in a year

const result = differenceInDays(
    new Date(2021, 5, 15),
    new Date(2020, 5, 15)
  );

console.log(result);

// opçao 2 usando Date-fns

let dataInicialFNS = new Date(2020,05,15)
let dataFinalFNS = new Date(2021,05,15)

let diferencaDiasFNS = differenceInDays(dataFinalFNS,dataInicialFNS);

console.log(diferencaDiasFNS);

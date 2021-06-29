//importar express no arquivo index.js
const express = require('express');
//import express from 'express';

//criar instancia do express
const app = express();

//utilizar o listen para exibux mensagem com console log
app.listen(3000,() =>
    console.log('servidor rodando na porta: http://localhost:3000')
);



// Desafio - Criar uma rota parametrizada, que irá se chamar /cumprimentar 
// e terá um parâmetro que será um nome, logo, ele terá que receber esse parâmetro
// que foi informado e exibir uma mensagem de cumprimento "Olá, nome".

app.get('/cumprimentar/:nome', (req,res) => {
    let nome = req.params.nome;
    const cumprimentar = 'Olá,' + nome
    res.send(cumprimentar)
}
);


// Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
// e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
// deverá retornar ele, ou, caso recebe os dois parâmetros terá que somar os dois e retornar
// o resultado.

app.get('/calcular/:num1&:num2',(req,res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let { num1, num2} = Number(req.params);


    if(num1 && !num2){
        res.send('numero' + num1)
    } else if(num1 && num2 ){
        let soma = num1+num2
        res.send('soma dos numeros é' + soma)
    }
}
);
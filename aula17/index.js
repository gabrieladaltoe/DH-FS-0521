//importar express no arquivo index.js
const express = require('express');
const { addAbortSignal } = require('stream');
//import express from 'express';

//criar instancia do express
const app = express();

app.get('/', (req, res) => res.send("Olá mundo")); // o send se encarrega de escrver os cabeçalhos e mostra a resposta pro cliente


app.get('/contatos', (req, res) => res.send(["contato 1", "contato 2"]))

//rotas parametrizadas
app.get('/produtos/:id', function(req,res){ //aqui o parametro é obrigatorio.... se fosse opcional seria com ?id
    //codigo
    let {id} = req.params //desestruturação do id
    res.send('Escolheu o produto ', id);
})

app.listen(3000, () => console.log("servidor rodando na porta 3000"))


//rotas parametrizadas

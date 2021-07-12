Express é mais um framework que fornece funcionalidades para ajudar nosso projeto. 
O Express, ele é uma infraestrutura para apps feitos em nodejs. 

Para instalar: 

*npm init*

**npm install express --save**

Depois, é preciso importar o express através de uma variável no app.js(entry point):

~~~javascript

const express = require('express');

let app = express();

~~~

Sempre que precisar usar o Express, é preciso instalá-lo no projeto. 

**COMO INSTALAR UM SERVIDOR COM EXPRESS**

~~~javascript

const express = require('express');

let app = express();

app.get('/', (req, res) => res.send('Olá mundo'))

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

~~~


**ROUTING & RESPONSE COM EXPRESS**

Route System: nos atende de acordo com cada pedido do cliente. 

app.metodoHTTP(nome do caminho, funçao a ser executada cujos parametros sao objetos literais)

get
post...
put
send

~~~javascript

app.get('/', (req,res)=>{
    res.send('Seção inicial - Bem-vindo');
});  


app.get('/contato', (req,res)=>{
    res.send('Seção de contato');
});

~~~

~~~javascript

const express = require('express');

let app = express();

app.get('/', (req, res) => res.send('Olá mundo'))
app.get('/contato', (req, res) => res.send({nome:"Gabriela", idade: 34})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

~~~

Para atualizar automaticamente o conteudo a ser carregado no servidor, é indicado rodar o *npm install nodemon -g* e *nodemon app.js*

Para enviarmos um arquivo utilizando o método get, usaremos o método sendFile, do Express. 

~~~javascript

const path = require('path'); //caminho nativo, não é necessario instalação

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})



~~~

Req.params => solicita o paramentro da rota

~~~javascript

//rotas parametrizadas

app.get('/produtos/:id', function(req,res){ //aqui o parametro é obrigatorio.... se fosse opcional seria com ?id
    //codigo
    let {id} = req.params.id //desestruturação do id
    res.send('Escolheu o produto + ' id)
})


~~~

Se o paramtro for opcional, usar ?. Para um parametro obrigatorio, usar : 


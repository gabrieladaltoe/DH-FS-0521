Para criar um servidor no node, temos alguns passos:

Criar o servidor:

~~~javascript
http.createServer();
~~~


Esse método recebe um callback:

~~~javascript

http.createServer(function(req,res){
    //aqui vai o código    
}).listen(3030,'localhost');

~~~

Isso é feito dentro do arquivo app.js

~~~javascript

const htt = require('http');

http.createServer((req,res) => {

}).listen(3000,'localhost');

~~~

Para acessar, podemos ver o conteúdo renderizado no navegador, digitando localhost:3000

Agora, é preciso definir o cabeçalho que irá na resposta. 
Pode ser um texto sem formatação, html ou JSON. 

Em seguida, usando o método .end(), será definido o conteúdo. E deve ser sempre uma string. 

~~~javascript

const htt = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {"Content-type": "text/plain"}) //caçalho para devolver a resposta pra o client. Status code e o tipo de informação
    res.end("Meu primeiro servidor")// de fato mandar o conteudo para o cliente

}).listen(3000,'localhost');

~~~


Um processo usado nos parametros da URL é o Routing


~~~javascript

const htt = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {"Content-type": "text/plain"})
        
        switch(req.url){
            case'/':
                res.end('Index');
                break;
            case '/contato':
                res.end('Contato');
                break

            default:
                res.end('Você está no nosso servidor')
                break;
        }
    

}).listen(3000,'localhost');

~~~



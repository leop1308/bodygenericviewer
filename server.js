var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

//Middleware para processar o corpo da requisição
app.use(bodyParser.json()); // Para requisições com conteúdo JSON
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));
app.use(bodyParser.raw());
app.use(bodyParser.text());


app.use(bodyParser.urlencoded({ extended: true })); // Para requisições com conteúdo URL-encoded 

// Rota para capturar o corpo da requisição
app.post('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
/*     console.log('REQ inteira: ');
    console.log(req); */

    // Responde com uma mensagem de sucesso
    res.status(200).send("Request Recebido ");
});

app.put('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
/*     console.log('REQ inteira: ');
    console.log(req); */

    // Responde com uma mensagem de sucesso
    res.status(200).send("Request Recebido ");
});

app.get('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
/*     console.log('REQ inteira: ');
    console.log(req); */

    // Responde com uma mensagem de sucesso
    res.status(200).send("Request Recebido ");
});

app.options('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
/*     console.log('REQ inteira: ');
    console.log(req);
 */
    // Responde com uma mensagem de sucesso
    res.status(200).send("Requesição recebida ");
});

app.trace('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
 /*    console.log('REQ inteira: ');
    console.log(req); */

    // Responde com uma mensagem de sucesso
    res.status(200).send("Requesição recebida ");
});

app.patch('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
/*     console.log('REQ inteira: ');
    console.log(req); */

    // Responde com uma mensagem de sucesso
    res.status(200).send("Requesição recebida ");
});

app.head('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
/*     console.log('REQ inteira: ');
    console.log(req); */

    // Responde com uma mensagem de sucesso
    res.status(200).send("Requesição recebida ");
});

app.delete('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
/*     console.log('REQ inteira: ');
    console.log(req); */

    // Responde com uma mensagem de sucesso
    res.status(200).send("Requesição recebida ");

});


// Inicia o servidor na porta 3000
app.listen( 80, () => {
    console.log('Servidor rodando na porta 3000');
});

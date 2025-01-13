const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware para processar o corpo da requisição
app.use(bodyParser.json()); // Para requisições com conteúdo JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para requisições com conteúdo URL-encoded

// Rota para capturar o corpo da requisição
app.post('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
    console.log('REQ inteira: ');
    console.log(req);

    // Responde com uma mensagem de sucesso
    res.status(200).send(req);
});

app.put('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
    console.log('REQ inteira: ');
    console.log(req);

    // Responde com uma mensagem de sucesso
    res.status(200).send(req);
});

app.get('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
    console.log('REQ inteira: ');
    console.log(req);

    // Responde com uma mensagem de sucesso
    res.status(200).send(req);
});

app.options('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
    console.log('REQ inteira: ');
    console.log(req);

    // Responde com uma mensagem de sucesso
    res.status(200).send(req);
});

app.trace('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
    console.log('REQ inteira: ');
    console.log(req);

    // Responde com uma mensagem de sucesso
    res.status(200).send(req);
});

app.patch('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
    console.log('REQ inteira: ');
    console.log(req);

    // Responde com uma mensagem de sucesso
    res.status(200).send(req);
});

app.head('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
    console.log('REQ inteira: ');
    console.log(req);

    // Responde com uma mensagem de sucesso
    res.status(200).send(req);
});

app.delete('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado
    console.log('REQ inteira: ');
    console.log(req);

    // Responde com uma mensagem de sucesso
    res.status(200).send(req);

});


// Inicia o servidor na porta 3000
app.listen( 443, () => {
    console.log('Servidor rodando na porta 3000');
});

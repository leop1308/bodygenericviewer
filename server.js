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

    // Responde com uma mensagem de sucesso
        res.status(200).send('Corpo da requisição recebido com sucesso' + res.status);
});

app.put('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado

    // Responde com uma mensagem de sucesso
        res.status(200).send('Corpo da requisição recebido com sucesso' + res.status);
});

app.get('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado

    // Responde com uma mensagem de sucesso
        res.status(200).send('Corpo da requisição recebido com sucesso' + res.status);
});

app.options('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado

    // Responde com uma mensagem de sucesso
        res.status(200).send('Corpo da requisição recebido com sucesso' + res.status);
});

app.trace('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado

    // Responde com uma mensagem de sucesso
    res.status(200).send('Corpo da requisição recebido com sucesso' + req.protocol);
});

app.patch('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado

    // Responde com uma mensagem de sucesso
    res.status(200).send('Corpo da requisição recebido com sucesso' + req.protocol);
});

app.head('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado

    // Responde com uma mensagem de sucesso
    res.status(200).send('Corpo da requisição recebido com sucesso' + req.protocol);
});

app.delete('/requisicao', (req, res) => {
    // Exibe o corpo da requisição no console
    console.log('Corpo da requisição recebido:');
    console.log(req.body);  // Aqui é onde o corpo da requisição é mostrado

    // Responde com uma mensagem de sucesso
    res.status(200).send('Corpo da requisição recebido com sucesso' + req.protocol);
});


// Inicia o servidor na porta 3000
app.listen( 443, () => {
    console.log('Servidor rodando na porta 3000');
});

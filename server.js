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
    res.status(200).send('Corpo da requisição recebido com sucesso');
});

// Inicia o servidor na porta 3000
app.listen( 80, () => {
    console.log('Servidor rodando na porta 3000');
});

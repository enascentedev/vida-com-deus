// Importa express e Router
const express = require('express');
const router = express.Router();

// Importa o controlador que irá lidar com a lógica de comunicação com a API da OpenAI
const chatController = require('../controladores/chatController');

// Define a rota para enviar perguntas para a API da OpenAI e receber respostas
router.post('/', chatController.enviarPergunta);


module.exports = router;

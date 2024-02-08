require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const rotaLivro = require("./rotas/livro");
const rotaUsuario = require("./rotas/usuarios");
const rotaArtigos = require("./rotas/artigos");
const rotaChat = require("./rotas/chat"); // Caminho corrigido
const asyncErrors = require("express-async-errors");

const corsMiddleware = require("./middlewares/corsMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json());

// Aplica o middleware CORS
corsMiddleware(app);

// Rotas
app.use("/livros", rotaLivro);
app.use("/usuarios", rotaUsuario);
app.use("/artigos", rotaArtigos);
app.use("/chat", rotaChat); // Registrar a rota do chat com prefixo /chat

// Middleware de erro
app.use(errorMiddleware);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Ocorreu um erro interno." });
});

// DB conexão
const conn = require("./db/conn");
conn();

const port = process.env.PORT || 8000; // Usando variável de ambiente para a porta

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});

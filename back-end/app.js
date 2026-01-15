require("dotenv").config();
const express = require("express");
const rotaLivro = require("./rotas/livro");
const rotaUsuario = require("./rotas/usuarios");
const rotaArtigos = require("./rotas/artigos");
const rotaHealth = require("./rotas/health");
const asyncErrors = require("express-async-errors");

const corsMiddleware = require("./middlewares/corsMiddleware");

const app = express();
app.use(express.json());

// Aplica o middleware CORS
corsMiddleware(app);

app.use("/livros", rotaLivro);
app.use("/usuarios", rotaUsuario);
app.use("/artigos", rotaArtigos);
app.use("/health", rotaHealth);

const errorMiddleware = require("./middlewares/errorMiddleware");
app.use(errorMiddleware);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Ocorreu um erro interno." });
});

// Render injeta a variável PORT em produção;
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});

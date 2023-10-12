require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const rotaLivro = require("./rotas/livro");
const rotaUsuario = require("./rotas/usuarios");
const asyncErrors = require("express-async-errors");

// Conexão com MongoDB
mongoose
	.connect(process.env.DB_URI, {
		user: process.env.DB_USER,
		pass: process.env.DB_PASSWORD,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use("/livros", rotaLivro);
app.use("/usuarios", rotaUsuario);

const errorMiddleware = require("./helpers/errorMiddleware");
app.use(errorMiddleware);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ error: "Ocorreu um erro interno." });
});

const port = 8000;

app.listen(port, () => {
	console.log(`Escutando a porta ${port}`);
});

// rotas/usuarios.js

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
	createUser,
	findUserByUsername,
} = require("../servicos/postgresUserService.js");

const router = express.Router();

if (!process.env.JWT_SECRET) {
	throw new Error("JWT_SECRET precisa estar definido");
}

router.post("/register", async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(400).send("Usuário e senha são obrigatórios");
	}

	const existingUser = await findUserByUsername(username);
	if (existingUser) {
		return res.status(409).send("O usuário já existe");
	}

	const passwordHash = await bcrypt.hash(password, 10);
	await createUser({ username, passwordHash });

	res.status(201).send("Usuário registrado com sucesso");
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(400).send("Usuário e senha são obrigatórios");
	}

	const user = await findUserByUsername(username);
	if (!user) {
		return res.status(400).send("Usuário não encontrado");
	}

	const storedPassword = user.Password || user.password;
	if (!storedPassword) {
		return res.status(500).send("Erro ao recuperar o hash de senha");
	}

	const isPasswordValid = await bcrypt.compare(password, storedPassword);
	if (!isPasswordValid) {
		return res.status(401).send("Senha inválida");
	}

	const userId = user.Id ?? user.id;
	const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
		expiresIn: "2d",
	});

	res.send({ token });
});

module.exports = router;

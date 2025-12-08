// rotas/usuarios.js

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sql, getPool, connectToDatabase } = require("../db/conn.js");
const router = express.Router();

router.post("/register", async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
                return res.status(400).send("Usuário e senha são obrigatórios");
        }

        try {
                const pool = await ensurePool();
                const existingUser = await pool
                        .request()
                        .input("username", sql.NVarChar, username)
                        .query("SELECT id FROM Users WHERE username = @username");

                if (existingUser.recordset.length > 0) {
                        return res.status(409).send("O usuário já existe");
                }

                const hash = await bcrypt.hash(password, 10);

                await pool
                        .request()
                        .input("username", sql.NVarChar, username)
                        .input("password", sql.NVarChar, hash)
                        .query("INSERT INTO Users (username, password) VALUES (@username, @password)");

                res.status(201).send("Usuário registrado com sucesso");
        } catch (error) {
                console.error("Erro ao registrar usuário:", error.message);
                res.status(500).send("Erro ao registrar usuário");
        }
});

router.post("/login", async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
                return res.status(400).send("Usuário e senha são obrigatórios");
        }

        try {
                const pool = await ensurePool();
                const userQuery = await pool
                        .request()
                        .input("username", sql.NVarChar, username)
                        .query("SELECT id, password FROM Users WHERE username = @username");

                const user = userQuery.recordset[0];
                if (!user) {
                        return res.status(400).send("Usuário não encontrado");
                }

                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (!isPasswordValid) {
                        return res.status(401).send("Senha inválida");
                }

                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                        expiresIn: "2d",
                });

                res.send({ token });
        } catch (error) {
                console.error("Erro ao realizar login:", error.message);
                res.status(500).send("Erro ao realizar login");
        }
});

async function ensurePool() {
        try {
                return getPool();
        } catch (error) {
                return connectToDatabase();
        }
}

module.exports = router;

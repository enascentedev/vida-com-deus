//artigos.js

//imports
const authenticate = require("../helpers/authMiddleware"); // Importe o middleware
const express = require("express");
const router = express.Router();
const Artigo = require("../models/artigos.js");
const artigoController = require("../controladores/artigos.js");

const mongoose = require("mongoose");

// Rota para obter todos os artigos
router.get("/", artigoController.getTodosArtigos);

// Rota para buscar um artigo por ID
router.get("/:id", artigoController.getArtigoPorId);

// export
module.exports = router;

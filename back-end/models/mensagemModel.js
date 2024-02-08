// /back-end/models/mensagemModel.js
const mongoose = require('mongoose');

const mensagemSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  texto: String,
  timestamp: { type: Date, default: Date.now },
  tipo: { type: String, enum: ['pergunta', 'resposta'] },
});

module.exports = mongoose.model('Mensagem', mensagemSchema);

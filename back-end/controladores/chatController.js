// chatController.js
const axios = require('axios');
const { OPENAI_API_KEY } = process.env; // Garanta que a chave da API esteja armazenada de forma segura

exports.enviarPergunta = async (req, res) => {
  const pergunta = req.body.pergunta;

  try {
    const respostaOpenAI = await axios.post(
      'https://api.openai.com/v4/completions', // URL da API da OpenAI (ajuste conforme necessário)
      {
        model: "text-davinci-003", // Especifica o modelo
        prompt: pergunta, // pergunta
        max_tokens: 100, // Limite de tokens na resposta
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        }
      }
    );

    // Envia a resposta da OpenAI de volta ao cliente
    res.json({ resposta: respostaOpenAI.data.choices[0].text });
  } catch (error) {
    console.error("Erro ao comunicar com a OpenAI:", error);
    res.status(500).send("Erro ao processar a pergunta");
  }
};

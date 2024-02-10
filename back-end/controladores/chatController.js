// chatController.js
const fetch = require('node-fetch');
const { OPENAI_API_KEY } = process.env; // Garante que a chave da API esteja armazenada de forma segura

exports.enviarPergunta = async (req, res) => {
  const pergunta = req.body.pergunta;

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "text-davinci-003", // Especifica o modelo
        prompt: pergunta, // pergunta
        max_tokens: 100, // Limite de tokens na resposta
				temperature: 0.5
      })
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    const data = await response.json();

    // Envia a resposta da OpenAI de volta ao cliente
    res.json({ resposta: data.choices[0].text });
  } catch (error) {
    console.error("Erro ao comunicar com a OpenAI:", error);
    res.status(500).send("Erro ao processar a pergunta");
  }
};

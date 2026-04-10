const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/analisar", async (req, res) => {
  const { curriculo } = req.body;

  if (!curriculo) {
    return res.status(400).json({ erro: "Currículo não enviado." });
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `Você é um especialista em recrutamento e seleção com 10 anos de experiência.
Analise o currículo abaixo e forneça:

1. **Pontos Fortes:**
2. **Pontos de Atenção:**
3. **Sugestões de Melhoria:**
4. **Nota Geral:** (0-10)

Seja direto, especifico e construtivo.

--- CURRICULO ---
${curriculo}`;

const result = await model.generateContent(prompt);
  const texto = result.response.text();

  res.json({ resultado: texto });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
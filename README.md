# CV Analyzer

Aplicação web que analisa currículos usando inteligência artificial (Gemini API).

## Funcionalidades

- Análise de pontos fortes e fracos do currículo
- Sugestões práticas de melhoria
- Nota geral com justificativa

## Tecnologias

- HTML, CSS (frontend)
- Node.js + Express (backend)
- Google Gemini API (IA)

## Como rodar localmente

### Pré-requisitos

- Node.js instalado
- Conta no [Google AI Studio](https://aistudio.google.com) para obter a chave da API

### Instalação

1. Clone o repositório
   git clone https://github.com/seu-usuario/cv-analyzer.git

2. Instale as dependências
   cd backend
   npm install

3. Configure as variáveis de ambiente
   cp .env.example .env
   
   Abra o arquivo `.env` e adicione sua chave:
   GEMINI_API_KEY=sua-chave-aqui

4. Rode o servidor
   node server.js

5. Abra o frontend
   cd ../frontend
   live-server

## Estrutura do projeto

cv-analyzer/
├── backend/
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── index.html
    └── style.css
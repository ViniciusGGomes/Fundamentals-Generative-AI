# Fundamentos de IA Generativa - Etapa 1 🚀

Este projeto tem como objetivo explorar os fundamentos de **IA Generativa** integrada a uma aplicação **Node.js com TypeScript**.  
A cada etapa, o projeto será expandido e documentado neste repositório.

---

## 📌 Etapa 1 - Criação de uma API básica com IA

Nesta primeira etapa, foi desenvolvida uma API simples utilizando:

- **Node.js** + **TypeScript**
- **Express** para criação de rotas
- **dotenv** para gerenciamento de variáveis de ambiente
- **OpenAI SDK** para interação com modelos de IA

### 🔧 O que foi feito:

1. Configuração inicial do projeto com **package.json**, dependências e scripts.
2. Criação do arquivo `.env.example` para armazenar a variável de ambiente `OPEN_AI_API_KEY`.
3. Implementação do arquivo **app.ts**, contendo uma rota `/generate` que:
   - Recebe uma mensagem do usuário no corpo da requisição.
   - Envia a mensagem para a API da OpenAI.
   - Retorna o texto gerado pela IA.
4. Criação do arquivo **server.ts** como ponto de entrada da aplicação, configurando o servidor para rodar na porta `3333`.

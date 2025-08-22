# Fundamentos de IA Generativa - Etapa 2 🚀

Dando continuidade ao projeto de estudo sobre **IA Generativa com Node.js e TypeScript**, nesta segunda etapa o foco foi **estruturar os dados de saída** da API da OpenAI para trabalhar com informações de forma mais confiável e programática.

---

## 📌 Objetivo da Etapa 2

- Usar diferentes ferramentas da OpenAI para gerar **saídas estruturadas**.
- Entender o problema de trabalhar apenas com **respostas em texto puro**, quando a aplicação precisa de dados em formato manipulável.
- Explorar ferramentas como:
  - **JSON Mode**
  - **Structured Outputs** (com validação usando **Zod**)

---

## 🔧 O que foi feito

1. Implementação do **JSON Mode** (`response_format: { type: "json_object" }`) para garantir que o modelo retorne dados em JSON.
2. Uso do **Zod** para validar a estrutura da resposta (assegurando que o objeto segue o formato esperado).
3. Integração com o helper `zodResponseFormat` da OpenAI, permitindo que o próprio SDK faça o parsing e a validação automaticamente.
4. Tratamento de erros para respostas inválidas ou recusadas pelo modelo.

# 📌 Etapa 3 — Function Calling com OpenAI

Nesta etapa, aprendi a utilizar o recurso de **Function Calling** da OpenAI.  
O objetivo foi estruturar o código de forma organizada, simulando um fluxo onde o modelo pode **chamar funções** para buscar informações de um “banco de dados” e retornar resultados processados.

---

## 🛠️ Estrutura do Projeto

- **`openai.ts`**  
  Contém a lógica de integração com a OpenAI.

  - Define as **tools** (funções disponíveis para o modelo).
  - Implementa a recursividade para lidar com chamadas de função.
  - Faz o parse da resposta usando **Zod** para garantir que os dados retornem no formato esperado.

- **`database.ts`**  
  Simula um banco de dados em memória, armazenando uma lista de produtos com seus estoques.

  - Funções expostas:
    - `produtosEmEstoque()` → retorna apenas os nomes dos produtos disponíveis.
    - `produtosEmFalta()` → retorna apenas os nomes dos produtos esgotados.

- **`app.ts`**  
  Cria a API com **Express**.

  - Rota **POST `/generate`**: recebe um prompt do usuário, chama `generateProducts` e retorna a resposta em JSON.

- **`.env`**  
  Contém a variável de ambiente para a chave da API da OpenAI.
  - Exemplo:
    ```env
    OPEN_AI_API_KEY=your_api_key_here
    ```

---

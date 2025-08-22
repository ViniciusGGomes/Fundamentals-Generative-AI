import dotenv from "dotenv";
dotenv.config();
import express from "express";
import OpenAI from "openai";
import z from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

export const app = express();
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const schema = z.object({
  produtos: z.array(z.string()),
});

app.post("/generate", async (req, res) => {
  try {
    const completion = await client.chat.completions.parse({
      model: "gpt-4o-mini",
      max_completion_tokens: 100,
      temperature: 0.3,
      response_format: zodResponseFormat(schema, "produtos_schema"),
      messages: [
        {
          role: "developer",
          content: "Liste três produtos que atendam a necessidade do usuário.",
        },
        {
          role: "user",
          content: req.body.message,
        },
      ],
    });

    if (completion.choices[0].message.refusal) {
      res.status(400).json({ error: "Refusal" });
    }

    res.json(completion.choices[0].message.parsed?.produtos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

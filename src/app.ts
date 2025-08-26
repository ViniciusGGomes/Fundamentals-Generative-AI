import express from "express";
import { generateProducts } from "./openai";

export const app = express();
app.use(express.json());

app.post("/generate", async (req, res) => {
  try {
    const products = await generateProducts(req.body.message);
    return res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

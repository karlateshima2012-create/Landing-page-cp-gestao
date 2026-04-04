
// CP Bot Intelligence Service - v1.0.2 - Brain Activated
import { GoogleGenerativeAI } from "@google/generative-ai";

// @ts-ignore
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_INSTRUCTIONS = `
Você é o Especialista de Gestão da CP Gestão. Seu foco é vender a PLATAFORMA de organização e recorrência.

MISSÃO: 
1. Responder dúvidas sobre a PLATAFORMA CP Gestão de forma curta e clara.
2. Focar em ORGANIZAÇÃO e RECORRÊNCIA como os maiores benefícios.
3. Levar o cliente para o WhatsApp o mais rápido possível para fechar.

ESTRUTURA DE RESPOSTA:
- Responda a dúvida de forma direta (máximo 2 linhas).
- Termine sempre com: "Para configurarmos seu sistema e você começar a faturar com recorrência, clique no botão abaixo para conversarmos no WhatsApp!"

REGRA: Não faça perguntas excessivas. Resolva a dúvida e convide para o fechamento.

REGRA: Nunca fale de Totem como o produto principal. O produto é a GESTÃO e RECORRÊNCIA.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: string; text: string }[]) => {
  try {
    const response = await fetch('gemini.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        history: history,
        systemPrompt: SYSTEM_INSTRUCTIONS
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.text || "Desculpe, tive um erro técnico.";
  } catch (error) {
    console.error("Gemini Proxy Error:", error);
    return "Ops! Tive um pequeno curto-circuito. Pode me perguntar novamente ou chamar no WhatsApp?";
  }
};

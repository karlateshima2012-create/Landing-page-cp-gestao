
// CP Bot Intelligence Service - v1.0.2 - Brain Activated
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : "") || "";
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_INSTRUCTIONS = `
Você é o Especialista de Gestão da CP Gestão. Seu foco é vender a PLATAFORMA de organização e recorrência.

MISSÃO: 
1. Descobrir o RAMO de atuação do cliente em no máximo 2 perguntas.
2. Explicar que a CP Gestão organiza os clientes e faz eles venderem MAIS VEZES para a mesma pessoa (Recorrência).
3. Ser extremamente conciso (máximo 2-3 linhas por resposta).

ESTRUTURA DE RESPOSTA:
- "Entendi! Ter organização e recorrência é o que faz o negócio escalar. Para eu te ajudar, qual é o seu ramo hoje?"
- Após ele responder, valide e diga: "Perfeito. No Plano Elite (¥3.980) você tem o controle total de quem compra e como fazer eles voltarem. Clique no botão abaixo para finalizarmos seu acesso!"

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
